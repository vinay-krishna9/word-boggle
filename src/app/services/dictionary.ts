import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dictionary {
  private http = inject(HttpClient);

  private words: Set<string> = new Set();

  async loadDictionary(): Promise<void> {
    if (this.words.size > 0) return;

    try {
      const dictText = await firstValueFrom(
        this.http.get('dictionary/english.txt', { responseType: 'text' })
      );

      dictText.split(/\r?\n/).forEach((w) => {
        const word = w.trim().toUpperCase();
        if (word) this.words.add(word);
      });

      console.log('Dictionary loaded successfully');
    } catch (error) {
      console.error('Failed to load dictionary:', error);
    }
  }

  isValidWord(word: string): boolean {
    return this.words.has(word.toUpperCase());
  }
}
