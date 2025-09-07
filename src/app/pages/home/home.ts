import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerOptions } from '../../components/player-options/player-options';
import { LanguageOptions } from '../../components/language-options/language-options';
import { VariantOptions } from '../../components/variant-options/variant-options';

@Component({
  selector: 'app-home',
  imports: [PlayerOptions, LanguageOptions, VariantOptions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private router = inject(Router);

  gameOptions: { players?: number; language?: string; variant?: string } = {};

  setGameOptions(option: { type: 'players' | 'language' | 'variant'; value: any }) {
    if (option.type === 'players') {
      this.gameOptions.players = option.value;
    } else if (option.type === 'language') {
      this.gameOptions.language = option.value;
    } else if (option.type === 'variant') {
      this.gameOptions.variant = option.value;
    }
  }

  startGame() {
    if (this.gameOptions.players && this.gameOptions.language) {
      this.router.navigate(['/game'], {
        queryParams: {
          players: this.gameOptions.players,
          lang: this.gameOptions.language,
          variant: this.gameOptions.variant,
        },
      });
    }
  }
}
