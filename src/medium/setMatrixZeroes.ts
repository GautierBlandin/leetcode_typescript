export function setZeroes(matrix: number[][]): void {
  const zeroRows = new Set<number>();
  const zeroCols = new Set<number>();

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  for (const i of zeroRows.values()) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      matrix[i][j] = 0;
    }
  }

  for (const j of zeroCols.values()) {
    for (let i = 0; i < matrix.length; i += 1) {
      matrix[i][j] = 0;
    }
  }
}
