import { TestBed } from '@angular/core/testing';

import { RandomBoardGenerator } from './random-board-generator';

describe('RandomBoardGenerator', () => {
  let service: RandomBoardGenerator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomBoardGenerator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
