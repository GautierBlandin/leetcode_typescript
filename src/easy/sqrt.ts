export function mySqrt(x: number): number {
  if (x === 0) return 0;

  // Start with an initial guess of half x's bitlength to be near the actual square root
  const bitLength = Math.floor(Math.log2(x)) + 1;
  let result = 2 ** (bitLength / 2);
  let i = 0;

  while (true) {
    const next = (result + x / result) / 2;
    const delta = Math.abs(result - next);
    result = next;

    i += 1;

    if (delta <= 0.1) { // Convergence criterion
      console.log(i);
      return Math.floor(result); // Return integer part
    }
  }
}
