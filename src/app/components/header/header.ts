import { Component, inject } from '@angular/core';
import { BoardGenerator } from '../../services/board-generator';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private _genBoard = inject(BoardGenerator);

  startNewGame() {
    this._genBoard.triggerNewGame();
  }
}
