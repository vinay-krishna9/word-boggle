import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-words-found',
  imports: [],
  templateUrl: './words-found.html',
  styleUrl: './words-found.scss',
})
export class WordsFound {
  @Input() foundWords: string[] = [];
}
