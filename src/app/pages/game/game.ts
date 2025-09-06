import { Component, inject, OnInit } from '@angular/core';
import { Board } from '../../components/board/board';
import { WordInput } from '../../components/word-input/word-input';
import { Score } from '../../components/score/score';
import { Scoring } from '../../services/scoring';
import { RandomBoardGenerator } from '../../services/random-board-generator';
import { Dictionary } from '../../services/dictionary';

@Component({
  selector: 'app-game',
  imports: [Board, WordInput, Score],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game implements OnInit {
  private _scoring = inject(Scoring);
  private _randomBoard = inject(RandomBoardGenerator);
  private _dictionary = inject(Dictionary);

  foundWords: string[] = [];
  score = 0;
  board: string[][] = [];
  invalidWord = false;

  constructor() {}

  ngOnInit(): void {
    this._dictionary.loadDictionary();
    this.startNewGame();
  }

  startNewGame() {
    this.board = this._randomBoard.generateBoard();
    this.foundWords = [];
    this.score = 0;
  }

  submitWord(word: string) {
    const isValid =
      !this.foundWords.includes(word) &&
      this._scoring.isWordValid(this.board, word) &&
      this._dictionary.isValidWord(word);

    if (isValid) {
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
