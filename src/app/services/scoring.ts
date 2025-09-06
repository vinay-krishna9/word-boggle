import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Scoring {
  /**
   * Calculate the score of a list of words.
   * Scoring:
   *  - 3 or 4 letters → 1 point
   *  - 5 letters → 2 points
   *  - 6 letters → 3 points
   *  - 7 letters → 5 points
   *  - 8+ letters → 11 points
   */
  calculateScore(words: string[]): number {
    let score = 0;

    for (const word of words) {
      const length = word.length;
      console.log('🚀 ~ Scoring ~ calculateScore ~ score:', score);

      // too short → no score
      if (length < 3) continue;

      switch (length) {
        case 3:
        case 4:
          score += 1;
          break;
        case 5:
          score += 2;
          break;
        case 6:
          score += 3;
          break;
        case 7:
          score += 5;
          break;
        default:
          score += 11; // length >= 8
      }
    }

    return score;
  }

  /**
   * Calculate scores for multiple players.
   * Only words that are unique to each player count.
   *
   * @param words - array of word lists (one per player)
   * @returns scores array, same order as words
   */
  calculateMultiplayerScore(words: string[][]): number[] {
    // Flatten all words + player id
    const wordOwners: Map<string, Set<number>> = new Map();

    words.forEach((words, playerIndex) => {
      for (const word of words) {
        const lower = word.toLowerCase();
        if (!wordOwners.has(lower)) {
          wordOwners.set(lower, new Set());
        }
        wordOwners.get(lower)?.add(playerIndex);
      }
    });

    // Calculate scores
    return words.map((words, playerIndex) => {
      const uniqueWords = words.filter((word) => {
        const owners = wordOwners.get(word.toLowerCase());
        return owners && owners.size === 1 && owners.has(playerIndex);
      });
      return this.calculateScore(uniqueWords);
    });
  }
}
