import { Component, inject } from '@angular/core';
import { Board } from '../../components/board/board';
import { WordInput } from '../../components/word-input/word-input';
import { Score } from '../../components/score/score';
import { Scoring } from '../../services/scoring';

@Component({
  selector: 'app-game',
  imports: [Board, WordInput, Score],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  private _scoring = inject(Scoring);

  foundWords: string[] = [];
  score = 0;
  board: string[][] = [
    ['C', 'A', 'T', 'S'],
    ['D', 'O', 'G', 'E'],
    ['B', 'I', 'R', 'D'],
    ['F', 'I', 'S', 'H'],
  ];

  submitWord(word: string) {
    console.log('🚀 ~ Game ~ submitWord ~ word:', word);
    if (!this.foundWords.includes(word)) {
      this.foundWords.push(word);
      this.score = this._scoring.calculateScore(this.foundWords);
      console.log('🚀 ~ Game ~ submitWord ~ score:', this.score);
    }
  }
}
