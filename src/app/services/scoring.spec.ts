import { TestBed } from '@angular/core/testing';

import { Scoring } from './scoring';

describe('Scoring', () => {
  let service: Scoring;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scoring);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateScore', () => {
    it('should correctly score words of different lengths', () => {
      const words = [
        'cat', // 3 letters → 1
        'door', // 4 letters → 1
        'apple', // 5 letters → 2
        'banana', // 6 letters → 3
        'octopus', // 7 letters → 5
        'elephant', // 8 letters → 11
        'go', // too short → 0
      ];
      const score = service.calculateScore(words);
      expect(score).toBe(23); // 1+1+2+3+5+11
    });
  });

  describe('calculateMultiplayerScore', () => {
    it('should award points only for unique words per player', () => {
      const player1 = ['cat', 'dog', 'banana'];
      const player2 = ['dog', 'apple', 'banana'];
      const player3 = ['snail', 'cat', 'pear'];

      const scores = service.calculateMultiplayerScore([player1, player2, player3]);

      // Unique words:
      // p1: none (all overlap) → 0
      // p2: apple (5 letters → 2 points) → 2
      // p3: snail (5 letters → 2 points), pear (4 letters → 1 point) → 3
      expect(scores).toEqual([0, 2, 3]);
    });
  });

  describe('ValidateWords', () => {
    it('should validate if the word follows adjaceny rules', () => {
      const board = [
        ['E', 'S', 'A', 'D', 'H'],
        ['B', 'K', 'N', 'L', 'F'],
        ['Z', 'Y', 'W', 'U', 'A'],
        ['N', 'L', 'B', 'I', 'Z'],
        ['C', 'I', 'A', 'E', 'W'],
      ];

      const validWord = 'snake';
      const invalidWord = 'lion';

      const isValid = service.isWordValid(board, validWord);
      const isInvalid = service.isWordValid(board, invalidWord);

      expect(isValid).toBeTrue();
      expect(isInvalid).toBeFalse();
    });
  });
});
