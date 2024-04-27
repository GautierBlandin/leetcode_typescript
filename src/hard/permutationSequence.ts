export function getPermutation(n: number, k: number): string {
  let dividend = k - 1;
  let result = '';
  let divisor = factorial(n - 1);
  const remaining: number[] = [];
  for (let i = 1; i <= n; i += 1) remaining.push(i);

  for (let m = n - 1; m >= 0; m -= 1) {
    const index = Math.floor(dividend / divisor);

    result += String(remaining[index]);
    remaining.splice(index, 1);
    dividend %= divisor;
    divisor /= m;
  }

  return result;
}

function factorial(n: number): number {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
