export function rotate(matrix: number[][]): void {
  // assume input is a valid square matrix of length >= 1
  const n = matrix.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.ceil(n / 2); j++) {
      const [centeredI, centeredJ] = toCentered(i, j, n);
      const [val1i, val1j] = fromCentered(centeredJ, -centeredI, n);
      const [val2i, val2j] = fromCentered(-centeredI, -centeredJ, n);
      const [val3i, val3j] = fromCentered(-centeredJ, centeredI, n);
      const val0 = matrix[i][j];
      const val1 = matrix[val1i][val1j];
      const val2 = matrix[val2i][val2j];
      const val3 = matrix[val3i][val3j];
      matrix[i][j] = val3;
      matrix[val1i][val1j] = val0;
      matrix[val2i][val2j] = val1;
      matrix[val3i][val3j] = val2;
    }
  }
}

function toCentered(i: number, j: number, n: number): [number, number] {
  return [i - Math.floor(n / 2), j - Math.floor(n / 2)];
}

function fromCentered(i: number, j: number, n: number): [number, number] {
  if (n % 2 === 1) return [i + Math.floor(n / 2), j + Math.floor(n / 2)];
  return [singleFromCenteredEvenN(i, n), singleFromCenteredEvenN(j, n)];
}

function singleFromCenteredEvenN(k: number, n: number) {
  if (k < 0) {
    return k + n / 2;
  }
  return k + n / 2 - 1;
}
