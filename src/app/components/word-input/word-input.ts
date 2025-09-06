import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-input',
  imports: [FormsModule],
  templateUrl: './word-input.html',
  styleUrl: './word-input.scss',
})
export class WordInput {
  @Input() invalidWord: boolean = false;
  @Output() submitWord = new EventEmitter<string>();

  word!: string;

  onSubmit() {
    const trimmedWord = this.word.trim();
    if (trimmedWord.length >= 3) {
      this.submitWord.emit(trimmedWord);
      this.word = '';
    } else {
      console.error('word should have minimum 3 letters');
      this.word = '';
    }
  }
}
