import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  imports: [CommonModule],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {
  board: string[][] = [
    ['C', 'A', 'T', 'S'],
    ['D', 'O', 'G', 'E'],
    ['B', 'I', 'R', 'D'],
    ['F', 'I', 'S', 'H'],
  ];
}
