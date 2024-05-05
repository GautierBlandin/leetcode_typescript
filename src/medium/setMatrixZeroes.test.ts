import { setZeroes } from './setMatrixZeroes';

describe('setMatrixZeroes', () => {
  it.each([
    [[[1, 1, 1], [1, 0, 1], [1, 1, 1]], [[1, 0, 1], [0, 0, 0], [1, 0, 1]]],
    [[[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]], [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]],
  ])('when input is %p, result should be %p', (input, expected) => {
    setZeroes(input);
    expect(input).toEqual(expected);
  });
});
