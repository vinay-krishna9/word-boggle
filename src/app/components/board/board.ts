import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  imports: [CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {
  @Input() board!: string[][];
  @Output() selectedLetter = new EventEmitter<string>();

  get boardStyle() {
    return {
      '--board-size': this.board?.length,
    };
  }

  selectLetter(letter: string) {
    this.selectedLetter.emit(letter.toUpperCase());
  }
}
