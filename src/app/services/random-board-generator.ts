import { Injectable } from '@angular/core';
import { Language, LETTERS } from '../shared/constants/letters.config';

@Injectable({
  providedIn: 'root',
})
export class RandomBoardGenerator {
  private currentLanguage: Language = 'english';
  private letters = LETTERS[this.currentLanguage];

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
