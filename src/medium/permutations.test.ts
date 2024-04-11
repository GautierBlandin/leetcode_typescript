import { permute } from './permutations';

describe('permutations', () => {
  it('should work for len = 1', () => {
    expect(permute([1])).toEqual([[1]]);
  });

  it('should work for len = 2', () => {
    testMatch(permute([1, 2]), [[1, 2], [2, 1]]);
  });

  it('should work for len = 3', () => {
    testMatch(permute([1, 2, 3]), [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]);
  });
});

function testMatch(results: number[][], expected: number[][]) {
  expected.forEach((expectedPerm) => {
    expect(results).toContainEqual(expectedPerm);
  });
}
