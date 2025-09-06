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

  /**
   * Validate if the given word exists on the board following adjacency rules.
   * @param board 4x4 letter board
   * @param word word to check
   * @returns if word is valid or not
   */
  isWordValid(board: string[][], word: string): boolean {
    if (!word || word.length === 0) return false;

    word = word.toLowerCase();
    const rows = board.length;
    const cols = board[0].length;

    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    const dfs = (r: number, c: number, index: number, visited: boolean[][]): boolean => {
      // Base case: found the entire word
      if (index === word.length) return true;

      // Check boundaries
      if (r < 0 || r >= rows || c < 0 || c >= cols) return false;

      // Check if already visited or wrong letter
      if (visited[r][c] || board[r][c].toLowerCase() !== word[index]) return false;

      // Mark as visited and explore neighbors
      visited[r][c] = true;

      for (const [dr, dc] of directions) {
        if (dfs(r + dr, c + dc, index + 1, visited)) {
          return true;
        }
      }

      // Backtrack: unmark this cell
      visited[r][c] = false;
      return false;
    };

    // Start DFS from every cell that matches first letter
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (board[r][c].toLowerCase() === word[0]) {
          // Create a new visited array for each starting point
          const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

          if (dfs(r, c, 0, visited)) {
            return true;
          }
        }
      }
    }

    return false;
  }
}
