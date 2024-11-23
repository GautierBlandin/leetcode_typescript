import { fourSum } from './18fourSum';

describe('fourSum', () => {
  it.each([
    [[[1, 0, -1, 0, -2, 2], 0], [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]],
    [[[2, 2, 2, 2, 2], 8], [[2, 2, 2, 2]]],
  ])('should work', (input, expected) => {
    const result = fourSum(input[0] as number[], input[1] as number);
    expect(expected.length).toEqual(result.length);
    for (const quadruplet of expected) {
      expect(result).toContainEqual(quadruplet);
    }
    for (const quadruplet of result) {
      expect(expected).toContainEqual(quadruplet);
    }
  });
});
