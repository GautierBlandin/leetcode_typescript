import { climbStairs } from './climbingStairs';

describe('climbing stairs', () => {
  it.each([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [5, 8],
  ])('when input is %d, it should return %d', (input, expected) => {
    expect(climbStairs(input)).toBe(expected);
  });
});
