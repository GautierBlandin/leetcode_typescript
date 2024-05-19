import { exist } from './79wordSearch';

describe('wordSearch', () => {
  it.each([
    [[[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'], true],
    [[[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE'], true],
    [[[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB'], false],
  ])('should work', (input, expected) => {
    expect(exist(input[0] as string[][], input[1] as string)).toBe(expected);
  });
});
