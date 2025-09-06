import { Component } from '@angular/core';
import { Board } from '../../components/board/board';
import { WordInput } from '../../components/word-input/word-input';
import { Score } from '../../components/score/score';

@Component({
  selector: 'app-game',
  imports: [Board, WordInput, Score],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {}
