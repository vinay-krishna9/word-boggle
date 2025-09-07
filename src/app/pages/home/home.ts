import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerOptions } from '../../components/player-options/player-options';

@Component({
  selector: 'app-home',
  imports: [PlayerOptions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private router = inject(Router);

  selectedPlayers!: string;

  setGameOptions(selectedOption: string) {
    this.selectedPlayers = selectedOption;
  }

  startGame() {
    if (this.selectedPlayers) {
      this.router.navigate(['/game'], { queryParams: { players: this.selectedPlayers } });
    }
  }
}
