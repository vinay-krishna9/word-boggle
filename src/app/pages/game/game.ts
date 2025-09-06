import { Component, inject } from '@angular/core';
import { Board } from '../../components/board/board';
import { WordInput } from '../../components/word-input/word-input';
import { Score } from '../../components/score/score';
import { Scoring } from '../../services/scoring';
import { RandomBoardGenerator } from '../../services/random-board-generator';

@Component({
  selector: 'app-game',
  imports: [Board, WordInput, Score],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  private _scoring = inject(Scoring);
  private _randomBoard = inject(RandomBoardGenerator);

  foundWords: string[] = [];
  score = 0;
  board: string[][] = [];
  invalidWord = false;

  constructor() {
    this.startNewGame();
  }

  startNewGame() {
    this.board = this._randomBoard.generateBoard();
    this.foundWords = [];
    this.score = 0;
  }

  submitWord(word: string) {
    if (!this.foundWords.includes(word) && this._scoring.isWordValid(this.board, word)) {
      this.foundWords.push(word);
      this.score = this._scoring.calculateScore(this.foundWords);
      this.invalidWord = false;
      console.log('🚀 ~ Game ~ submitWord ~ score:', this.score);
    } else {
      this.invalidWord = true;
      console.error(`Invalid or duplicate word: ${word}`);
    }
  }
}
