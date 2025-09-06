import { Component } from '@angular/core';
import { Game } from './pages/game/game';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [Game, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
