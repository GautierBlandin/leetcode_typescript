/**
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 *
 * A sudoku solution must satisfy all of the following rules:
 *
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * The '.' character indicates empty cells.
 *
 * Example 1:
 *
 *
 * Input: board = [
 * ["5","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: [
 * ["5","3","4","6","7","8","9","1","2"],
 * ["6","7","2","1","9","5","3","4","8"],
 * ["1","9","8","3","4","2","5","6","7"],
 * ["8","5","9","7","6","1","4","2","3"],
 * ["4","2","6","8","5","3","7","9","1"],
 * ["7","1","3","9","2","4","8","5","6"],
 * ["9","6","1","5","3","7","2","8","4"],
 * ["2","8","7","4","1","9","6","3","5"],
 * ["3","4","5","2","8","6","1","7","9"]
 * ]
 * Explanation: The input board is shown above and the only valid solution is shown below:
 *
 *
 * Constraints:
 *
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit or '.'.
 * It is guaranteed that the input board has only one solution.
 */
import { validateSudoku } from '../medium/validSudoku';

export function sudokuSolver(board: string[][]): boolean {
  /**
   * The plan for this exercise is to use backtracking with heuristic to efficiently solve the problem.
   * At each step:
   * - Find the square with the lowest number of possible digits
   *   - for each square, compute its possible moves
   * - Try each digit, going to the next step
   * - If the board is not solved, undo the move
   */

  let minMoveNumber = 10;
  let minPossibleMoveSet: Set<string> = new Set([]);
  let minMoveRow: number = -1;
  let minMoveCol: number = -1;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const possibleMoveSet = computePossibleMoves(board, i, j);
      if (board[i][j] === '.') {
        // If a square is empty but also has no possible move, then the board
        // is in a bad state and we can return false to backtrack
        if (possibleMoveSet.size === 0) return false;
      }
      if (possibleMoveSet.size > 0 && possibleMoveSet.size < minMoveNumber) {
        minMoveNumber = possibleMoveSet.size;
        minPossibleMoveSet = possibleMoveSet;
        minMoveRow = i;
        minMoveCol = j;
      }
    }
  }

  // If no moves are available (and we know we are currently in a valid state and there are no empty squares),
  // stop the algorithm and return true as we have a valid board
  if (minMoveNumber === 10) {
    return true;
  }

  const iterator = minPossibleMoveSet.values();

  for (let i = 0; i < minPossibleMoveSet.size; i++) {
    const move: string = iterator.next().value;

    // eslint-disable-next-line no-param-reassign
    board[minMoveRow][minMoveCol] = move;

    // if the board is valid after making the new move
    // we can try to solve it with the new character added
    if (validateSudoku(board) && sudokuSolver(board)) {
      return true;
    }
  }

  // we undo our move if all our moves on this square failed to create a valid board
  // eslint-disable-next-line no-param-reassign
  board[minMoveRow][minMoveCol] = '.';
  return false;
}

export function computePossibleMoves(board: string[][], row: number, col: number): Set<string> {
  // Should only look at the 27 necessary squares.
  if (board[row][col] !== '.') return new Set();

  const possibleMoves = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);

  const squareTopLeftRow = Math.floor(row / 3) * 3;
  const squareTopLeftCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 9; i++) {
    possibleMoves.delete(board[row][i]);
    possibleMoves.delete(board[i][col]);
    possibleMoves.delete(board[squareTopLeftRow + Math.floor(i / 3)][squareTopLeftCol + (i % 3)]);
  }

  return possibleMoves;
}
