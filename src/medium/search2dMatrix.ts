export function searchMatrix(matrix: number[][], target: number): boolean {
  const n = matrix.length;
  const m = matrix[0].length;

  let i = 0;
  let j = n * m - 1;

  function toCoord(k: number) {
    return [Math.floor(k / m), k % m];
  }

  while (i <= j) {
    const mid = Math.floor((i + j) / 2);

    const [rowMidCoord, colMidCoord] = toCoord(mid);
    const midValue = matrix[rowMidCoord][colMidCoord];

    if (midValue === target) return true;
    if (midValue > target) j = mid - 1;
    if (midValue < target) i = mid + 1;
  }

  return false;
}
