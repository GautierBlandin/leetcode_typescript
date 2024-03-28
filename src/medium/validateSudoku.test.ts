import { validateSudoku } from './validSudoku';

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

describe('validateSudoku', () => {
  it('should validate an empty board', () => {
    const board = initializeBoard();
    expect(validateSudoku(board)).toEqual(true);
  });

  it('should not validate a board with a colliding row', () => {
    const board = initializeBoard();
    board[0][0] = '1';
    board[0][1] = '1';

    expect(validateSudoku(board)).toEqual(false);
  });

  it('should not validate a board with a colliding column', () => {
    const board = initializeBoard();
    board[0][0] = '1';
    board[1][0] = '1';

    expect(validateSudoku(board)).toEqual(false);
  });

  it('should not validate a board where a colliding square', () => {
    const board = initializeBoard();
    board[0][0] = '1';
    board[2][2] = '1';

    expect(validateSudoku(board)).toEqual(false);
  });

  it('should not validate another board with a colliding square', () => {
    const board = initializeBoard();
    board[3][0] = '2';
    board[4][2] = '2';

    expect(validateSudoku(board)).toEqual(false);
  });

  it('should work on the example', () => {
    const board = [['5', '3', '.', '.', '7', '.', '.', '.', '.'],
      ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
      ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
      ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
      ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
      ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
      ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
      ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
      ['.', '.', '.', '.', '8', '.', '.', '7', '9']];

    expect(validateSudoku(board)).toEqual(true);
  });
});
