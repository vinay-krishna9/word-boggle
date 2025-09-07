import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.html',
  styleUrl: './score.scss',
})
export class Score {
  @Input() scores: number[] = [];
  @Input() currentPlayer: number = 0;
}
