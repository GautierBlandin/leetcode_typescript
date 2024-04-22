export function solveNQueens(n: number): string[][] {
  const results: string[][] = [];
  const numberOfQueens: number = 0;

  nQueensRecursive(0, {
    numberOfQueens,
    results,
    currentBoard: new Array(n).fill(undefined).map(() => '.'.repeat(n)),
  });

  return results;
}

type Context = {
  numberOfQueens: number;
  results: string[][];
  currentBoard: string[];
};

/**
 *
 * @param minIndex min index for placing the next queen in flattened coordinate
 * @param context recursive context to pass along
 */
export function nQueensRecursive(minIndex: number, context: Context) {
  const n = context.currentBoard.length;
  for (let i = minIndex; i < n * n; i += 1) {
    const row = Math.floor(i / n);
    const col = i % n;

    if (isNotAttacked(row, col, context.currentBoard)) {
      placeQueen(row, col, context.currentBoard);
      context.numberOfQueens += 1;

      if (context.numberOfQueens === n) {
        context.results.push([...context.currentBoard]);
      } else {
        nQueensRecursive(i + 1, context);
      }

      unplaceQueen(row, col, context.currentBoard);
      context.numberOfQueens -= 1;
    }
  }
}

function isNotAttacked(row: number, col: number, currentBoard: string[]) {
  const n = currentBoard.length;
  for (let i = 0; i < n; i += 1) {
    if (i === row) continue;
    if (currentBoard[i][col] === 'Q') return false;
  }
  for (let i = 0; i < n; i += 1) {
    if (i === col) continue;
    if (currentBoard[row][i] === 'Q') return false;
  }
  for (let i = 0; i < n; i += 1) {
    const dRow = row - i;
    const dCol = col - i;
    if (dRow < 0 || dCol < 0) break;
    if (currentBoard[dRow][dCol] === 'Q') return false;
  }
  for (let i = 0; i < n; i += 1) {
    const dRow = row + i;
    const dCol = col + i;
    if (dRow >= n || dCol >= n) break;
    if (currentBoard[dRow][dCol] === 'Q') return false;
  }
  for (let i = 0; i < n; i += 1) {
    const dRow = row - i;
    const dCol = col + i;
    if (dRow < 0 || dCol >= n) break;
    if (currentBoard[dRow][dCol] === 'Q') return false;
  }
  for (let i = 0; i < n; i += 1) {
    const dRow = row + i;
    const dCol = col - i;
    if (dRow >= n || dCol < 0) break;
    if (currentBoard[dRow][dCol] === 'Q') return false;
  }
  return true;
}

function placeQueen(row: number, col: number, board: string[]) {
  board[row] = `${board[row].substring(0, col)}Q${board[row].substring(col + 1)}`;
}

function unplaceQueen(row: number, col: number, board: string[]) {
  board[row] = `${board[row].substring(0, col)}.${board[row].substring(col + 1)}`;
}
