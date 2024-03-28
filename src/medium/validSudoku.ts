/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Note:
 *
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 *
 *
 * Example 1:
 *
 * Input: board =
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: true
 * Example 2:
 *
 * Input: board =
 * [["8","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 *
 *
 * Constraints:
 *
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit 1-9 or '.'.
 */

export function validateSudoku(board: string[][]): boolean {
  return validateRows(board) && validateColumn(board) && validateSquare(board);
}

function validateRows(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const existingDigits: string[] = [];
    for (let j = 0; j < 9; j++) {
      const digit = board[i][j];
      if (digit !== '.') {
        if (existingDigits.indexOf(digit) !== -1) return false;
        existingDigits.push(digit);
      }
    }
  }
  return true;
}

function validateColumn(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const existingDigits: string[] = [];
    for (let j = 0; j < 9; j++) {
      const digit = board[j][i];
      if (digit !== '.') {
        if (existingDigits.indexOf(digit) !== -1) return false;
        existingDigits.push(digit);
      }
    }
  }
  return true;
}

function validateSquare(board: string[][]): boolean {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const existingDigits: string[] = [];
      for (let k = 0; k < 9; k++) {
        const rowStart = i * 3;
        const colStart = j * 3;
        const digit = board[rowStart + Math.floor(k / 3)][colStart + (k % 3)];
        if (digit !== '.') {
          if (existingDigits.indexOf(digit) !== -1) return false;
          existingDigits.push(digit);
        }
      }
    }
  }
  return true;
}
