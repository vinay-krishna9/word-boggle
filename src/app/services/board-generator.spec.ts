import { TestBed } from '@angular/core/testing';

import { BoardGenerator } from './board-generator';

describe('BoardGenerator', () => {
  let service: BoardGenerator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardGenerator);
  });

  it('should generate a 4x4 board', () => {
    const board = service.generateBoard(4);
    expect(board.length).toBe(4);
    board.forEach((row) => expect(row.length).toBe(4));
  });

  it('should generate a 5x5 board', () => {
    const board = service.generateBoard(5);
    expect(board.length).toBe(5);
    board.forEach((row) => expect(row.length).toBe(5));
  });

  it('each cell should contain a letter A-Z', () => {
    const board = service.generateBoard(4);
    board.forEach((row) => {
      row.forEach((cell) => {
        expect(cell).toMatch(/^[A-Z]$/);
      });
    });
  });

  it('board should be randomized across runs', () => {
    const board1 = service.generateBoard(4);
    const board2 = service.generateBoard(4);
    expect(board1).not.toEqual(board2);
  });
});
