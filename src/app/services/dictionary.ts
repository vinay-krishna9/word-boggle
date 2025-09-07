import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dictionary {
  private http = inject(HttpClient);

  private words: Set<string> = new Set();

  loaded = signal(false);

  async loadDictionary(lang: string): Promise<void> {
    if (this.words.size > 0) {
      this.loaded.set(true); // already loaded
      return;
    }

    try {
      const dictText = await firstValueFrom(
        this.http.get(`dictionary/${lang}_dictionary.txt`, { responseType: 'text' })
      );

      dictText.split(/\r?\n/).forEach((w) => {
        const word = w.trim().toUpperCase();
        if (word) this.words.add(word);
      });

      console.log('Dictionary loaded successfully');
      this.loaded.set(true); // signal now true
    } catch (error) {
      console.error('Failed to load dictionary:', error);
      this.loaded.set(false);
    }
  }

  isValidWord(word: string): boolean {
    return this.words.has(word.toUpperCase());
  }
}
