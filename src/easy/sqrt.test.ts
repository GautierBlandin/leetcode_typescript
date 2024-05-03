import { mySqrt } from './sqrt';

describe('sqrt', () => {
  it.each([
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 2],
    [8, 2],
    [9, 3],
    [10, 3],
    [11, 3],
    [12, 3],
    [13, 3],
    [13, 3],
    [14, 3],
    [15, 3],
    [16, 4],
    [2000000000, 44721],
  ])('when input is %d, sqrt should be %d', (input, expected) => {
    expect(mySqrt(input)).toBe(expected);
  });
});
