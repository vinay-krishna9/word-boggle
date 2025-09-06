import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-input',
  imports: [FormsModule],
  templateUrl: './word-input.html',
  styleUrl: './word-input.scss',
})
export class WordInput {
  @Output() submitWord = new EventEmitter<string>();

  word!: string;

  onSubmit() {
    const trimmedWord = this.word.trim();
    console.log('🚀 ~ WordInput ~ onSubmit ~ trimmedWord:', trimmedWord);
    if (trimmedWord.length >= 3) {
      this.submitWord.emit(trimmedWord);
    } else {
      console.log('word < 3');
      this.word = '';
    }
  }
}
