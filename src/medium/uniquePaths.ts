export function uniquePaths(m: number, n: number) {
  return nChooseK(m + n - 2, m - 1);
}

function nChooseK(n: number, k: number): number {
  const j = Math.min(k, n - k);

  let result = 1;

  for (let i = 1; i <= j; i += 1) {
    result *= n - i + 1;
    result /= i;
  }

  return result;
}
