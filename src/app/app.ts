import { Component, signal } from '@angular/core';
import { Game } from './pages/game/game';

@Component({
  selector: 'app-root',
  imports: [Game],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
