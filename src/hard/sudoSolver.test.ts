import { computePossibleMoves, sudokuSolver } from './sudokuSolver';

const initializeBoard = () => {
  const board: string[][] = [];

  for (let i = 0; i < 9; i++) {
    board.push([]);
    for (let j = 0; j < 9; j++) {
      board[i].push('.');
    }
  }

  return board;
};

describe('sudokuSolver', () => {
  describe('main method', () => {
    it('shoud solve the example', () => {
      const board = [
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ];

      sudokuSolver(board);

      expect(board).toEqual([
        ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
        ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
        ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
        ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
        ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
        ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
        ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
        ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
        ['3', '4', '5', '2', '8', '6', '1', '7', '9'],
      ]);
    });

    it('should solve failed test one', () => {
      const board = [
        ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
        ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
        ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
        ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
        ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
        ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '2', '7', '5', '9', '.', '.']];

      sudokuSolver(board);

      expect(board).toEqual([
        ['5', '1', '9', '7', '4', '8', '6', '3', '2'],
        ['7', '8', '3', '6', '5', '2', '4', '1', '9'],
        ['4', '2', '6', '1', '3', '9', '8', '7', '5'],
        ['3', '5', '7', '9', '8', '6', '2', '4', '1'],
        ['2', '6', '4', '3', '1', '7', '5', '9', '8'],
        ['1', '9', '8', '5', '2', '4', '3', '6', '7'],
        ['9', '7', '5', '8', '6', '3', '1', '2', '4'],
        ['8', '3', '2', '4', '9', '1', '7', '5', '6'],
        ['6', '4', '1', '2', '7', '5', '9', '8', '3'],
      ]);
    });
  });

  describe('computePossibleMoves', () => {
    it('should return an empty set when the square already has a digit', () => {
      const board = initializeBoard();
      board[2][2] = '3';

      expect(computePossibleMoves(board, 2, 2).size).toEqual(0);
    });

    it('should return the correct set of possible moves accounting for rows', () => {
      const board = initializeBoard();

      board[0] = ['1', '.', '3', '.', '5', '6', '7', '8', '9'];

      const moves = (computePossibleMoves(board, 0, 1));
      expect(moves.has('2')).toBe(true);
      expect(moves.has('4')).toBe(true);
      expect(moves.size).toEqual(2);
    });

    it('should return the correct set of possibles moves accounting for columns', () => {
      const board = initializeBoard();
      board[0][3] = '1';
      board[1][3] = '2';
      board[2][3] = '3';

      expect(computePossibleMoves(board, 3, 3)).toEqual(new Set(['4', '5', '6', '7', '8', '9']));
    });

    it('should return the correct set of possible moves accounting for squares', () => {
      const board = initializeBoard();
      board[0][0] = '1';
      board[1][1] = '2';
      board[2][2] = '3';
      expect(computePossibleMoves(board, 0, 1)).toEqual(new Set(['4', '5', '6', '7', '8', '9']));
    });
  });
});
