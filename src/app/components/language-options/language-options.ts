import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-language-options',
  imports: [],
  templateUrl: './language-options.html',
  styleUrl: './language-options.scss',
})
export class LanguageOptions {
  @Output() language = new EventEmitter();

  selectedLanguage!: string;

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.language.emit(this.selectedLanguage);
  }
}
