import { permuteUnique } from './permutation2';

describe('permuteUnique', () => {
  it('should work on single element', () => {
    expect(permuteUnique([1])).toEqual([[1]]);
  });

  it('should work for len = 3', () => {
    testMatch(permuteUnique([1, 2, 3]), [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
  });

  it('should work with duplicates', () => {
    testMatch(
      permuteUnique([1, 1, 2, 2]),
      [[2, 2, 1, 1], [2, 1, 2, 1], [2, 1, 1, 2], [1, 2, 2, 1], [1, 2, 1, 2], [1, 1, 2, 2]],
    );
  });
});

function testMatch(results: number[][], expected: number[][]) {
  expect(results.length).toBe(expected.length);
  expected.forEach((expectedPerm) => {
    expect(results).toContainEqual(expectedPerm);
  });
}
