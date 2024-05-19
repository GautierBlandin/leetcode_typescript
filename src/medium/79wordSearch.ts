export function exist(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === word[0] && searchFrom(i, j, 1, new Set<string>().add(`${i},${j}`), board, word)) {
        return true;
      }
    }
  }

  return false;
}

function searchFrom(i: number, j: number, nextLetterIndex: number, positionSet: Set<string>, board: string[][], word: string): boolean {
  if (nextLetterIndex >= word.length) return true;

  // top
  if (i - 1 >= 0 && board[i - 1][j] === word[nextLetterIndex] && !positionSet.has(`${i - 1},${j}`)) {
    if (searchFrom(i - 1, j, nextLetterIndex + 1, positionSet.add(`${i - 1},${j}`), board, word)) {
      return true;
    }
    positionSet.delete(`${i - 1},${j}`);
  }
  // right
  if (j + 1 < board[0].length && board[i][j + 1] === word[nextLetterIndex] && !positionSet.has(`${i},${j + 1}`)) {
    if (searchFrom(i, j + 1, nextLetterIndex + 1, positionSet.add(`${i},${j + 1}`), board, word)) {
      return true;
    }
    positionSet.delete(`${i},${j + 1}`);
  }
  // bottom
  if (i + 1 < board.length && board[i + 1][j] === word[nextLetterIndex] && !positionSet.has(`${i + 1},${j}`)) {
    if (searchFrom(i + 1, j, nextLetterIndex + 1, positionSet.add(`${i + 1},${j}`), board, word)) {
      return true;
    }
    positionSet.delete(`${i + 1},${j}`);
  }
  // left
  if (j - 1 >= 0 && board[i][j - 1] === word[nextLetterIndex] && !positionSet.has(`${i},${j - 1}`)) {
    if (searchFrom(i, j - 1, nextLetterIndex + 1, positionSet.add(`${i},${j - 1}`), board, word)) {
      return true;
    }
    positionSet.delete(`${i},${j - 1}`);
  }

  return false;
}
