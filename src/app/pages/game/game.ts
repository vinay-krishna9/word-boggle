import { Component, effect, inject, ViewChild } from '@angular/core';
import { Board } from '../../components/board/board';
import { WordInput } from '../../components/word-input/word-input';
import { Score } from '../../components/score/score';
import { Scoring } from '../../services/scoring';
import { BoardGenerator } from '../../services/board-generator';
import { WordsFound } from '../../components/words-found/words-found';
import { Dictionary } from '../../services/dictionary';
import { Timer } from '../../components/timer/timer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [Board, WordInput, Score, WordsFound, Timer],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  private _scoring = inject(Scoring);
  private _genBoard = inject(BoardGenerator);
  private _dictionary = inject(Dictionary);
  private route = inject(ActivatedRoute);

  @ViewChild(Timer) timer?: Timer;

  foundWords: string[] = [];
  scores: number[] = [];
  board: string[][] = [];
  invalidWord = false;
  clickedWord: string = '';
  gameOver: boolean = false;
  playerWords: string[][] = [];
  playersCount = 1;
  currentPlayer = 0;

  constructor() {
    this._dictionary.loadDictionary();

    this.route.queryParams.subscribe((params) => {
      this.playersCount = +params['players'] || 1;

      this.startNewGame();
    });
  }

  startNewGame() {
    this.board = this._genBoard.generateBoard();

    this.playerWords = Array.from({ length: this.playersCount }, () => []);
    this.scores = Array(this.playersCount).fill(0);
    this.gameOver = false;
    this.invalidWord = false;
    this.currentPlayer = 0;
    if (this.timer) this.timer.reset();
  }

  submitWord(word: string) {
    word = word.toUpperCase();
    const isValid =
      !this.playerWords[this.currentPlayer].includes(word) &&
      this._scoring.isWordValid(this.board, word) &&
      this._dictionary.isValidWord(word);

    if (isValid) {
      this.playerWords[this.currentPlayer].push(word);
      if (this.playersCount === 1) {
        console.log(this.playerWords[0]);

        this.scores[0] = this._scoring.calculateScore(this.playerWords[0]);
      } else {
        this.scores = this._scoring.calculateMultiplayerScore(this.playerWords);
      }

      this.clickedWord = '';
      this.invalidWord = false;
      this.nextPlayer();
      console.log('🚀 ~ Game ~ submitWord ~ score:', this.scores);
    } else {
      this.clickedWord = '';
      this.invalidWord = true;
      console.error(`Invalid or duplicate word: ${word}`);
    }
  }

  appenWord(letter: string) {
    this.clickedWord += letter;
  }

  handleTimeUp() {
    this.gameOver = true;
    alert(`Time's up! Your final score is ${this.scores}`);
    this.startNewGame();
  }

  nextPlayer() {
    this.currentPlayer = (this.currentPlayer + 1) % this.playersCount;
  }
}
