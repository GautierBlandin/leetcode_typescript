import { combine } from './77combinations';

describe('combinations', () => {
  it.each([
    [[4, 2], [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]],
    [[5, 3], [[1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5]]],
    [[1, 1], [[1]]],
    [[2, 2], [[1, 2]]],
    [[2, 1], [[1], [2]]],
    [[3, 1], [[1], [2], [3]]],
    [[3, 3], [[1, 2, 3]]],
  ])('should work', (input, expected) => {
    expect(combine(input[0], input[1])).toEqual(expected);
  });
});
