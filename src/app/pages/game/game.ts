import { Component, effect, inject } from '@angular/core';
import { Board } from '../../components/board/board';
import { WordInput } from '../../components/word-input/word-input';
import { Score } from '../../components/score/score';
import { Scoring } from '../../services/scoring';
import { BoardGenerator } from '../../services/board-generator';
import { WordsFound } from '../../components/words-found/words-found';

@Component({
  selector: 'app-game',
  imports: [Board, WordInput, Score, WordsFound],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  private _scoring = inject(Scoring);
  private _genBoard = inject(BoardGenerator);

  foundWords: string[] = [];
  score = 0;
  board: string[][] = [];
  invalidWord = false;
  clickedWord: string = '';

  constructor() {
    effect(() => {
      this._genBoard.newGameTrigger();
      this.startNewGame();
    });
  }

  startNewGame() {
    this.board = this._genBoard.generateBoard();
    this.foundWords = [];
    this.score = 0;
  }

  submitWord(word: string) {
    if (!this.foundWords.includes(word) && this._scoring.isWordValid(this.board, word)) {
      this.foundWords.push(word);
      this.score = this._scoring.calculateScore(this.foundWords);
      this.clickedWord = '';
      this.invalidWord = false;
      console.log('🚀 ~ Game ~ submitWord ~ score:', this.score);
    } else {
      this.invalidWord = true;
      this.clickedWord = '';
      console.error(`Invalid or duplicate word: ${word}`);
    }
  }

  appenWord(letter: string) {
    this.clickedWord += letter;
  }
}
