import { searchMatrix } from './search2dMatrix';

describe('searchMatrix', () => {
  it.each([
    [[[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], true],
    [[[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13], false],
    [[[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 1], true],
    [[[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 60], true],
  ])('when input is %p, is should return %b', (input, expected) => {
    expect(searchMatrix(input[0] as number[][], input[1] as number)).toBe(expected);
  });
});
