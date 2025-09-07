import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-player-options',
  imports: [],
  templateUrl: './player-options.html',
  styleUrl: './player-options.scss',
})
export class PlayerOptions {
  @Output() selectedNumber = new EventEmitter();
  selectedPlayers!: number;

  selectPlayers(count: number) {
    this.selectedPlayers = count;
    this.selectedNumber.emit(this.selectedPlayers);
  }
}
