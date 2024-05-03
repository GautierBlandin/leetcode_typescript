export function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev = 1;
  let cur = 2;

  for (let i = 2; i < n; i += 1) {
    const next = cur + prev;
    prev = cur;
    cur = next;
  }

  return cur;
}
