import { Injectable, signal } from '@angular/core';
import { Language, LETTERS } from '../shared/constants/letters.config';

@Injectable({
  providedIn: 'root',
})
export class BoardGenerator {
  private currentLanguage: Language = 'english';
  private letters = LETTERS[this.currentLanguage];

  newGameTrigger = signal(0);

  /**
   * Detects when new game is to be generated
   */
  triggerNewGame() {
    this.newGameTrigger.update((v) => v + 1);
  }

  /**
   * Generate a 4x4 board with random letters
   */
  generateBoard(): string[][] {
    const board: string[][] = [];
    for (let row = 0; row < 4; row++) {
      const rowLetters: string[] = [];
      for (let col = 0; col < 4; col++) {
        const randomLetter = this.getRandomLetter();
        rowLetters.push(randomLetter);
      }
      board.push(rowLetters);
    }
    return board;
  }

  // TODO: handle language change

  private getRandomLetter(): string {
    const idx = Math.floor(Math.random() * this.letters.length);
    return this.letters[idx];
  }
}
