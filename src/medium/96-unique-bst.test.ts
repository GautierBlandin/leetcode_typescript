function numTrees(n: number): number {
  const mem: number[] = Array(n + 1).fill(0);

  mem[0] = 1;

  for (let i = 1; i <= n; i += 1) {
    for (let j = 0; j < i; j += 1) {
      mem[i] += mem[j] * mem[i - j - 1];
    }
  }

  return mem[n];
}

describe(numTrees, () => {
  it('works for 1', () => {
    expect(numTrees(1)).toBe(1);
  });

  it('works for 2', () => {
    expect(numTrees(2)).toBe(2);
  });

  it('works for 3', () => {
    expect(numTrees(3)).toBe(5);
  });

  it('works for 4', () => {
    expect(numTrees(4)).toBe(14);
  });
});
