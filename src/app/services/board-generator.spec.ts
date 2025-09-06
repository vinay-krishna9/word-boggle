import { TestBed } from '@angular/core/testing';

import { BoardGenerator } from './board-generator';

describe('BoardGenerator', () => {
  let service: BoardGenerator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardGenerator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
