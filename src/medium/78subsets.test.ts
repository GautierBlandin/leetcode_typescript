import { subsets } from './78subsets';

describe('subsets', () => {
  it.each([
    [[1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]],
    [[0], [[], [0]]],
  ])('should work', (input, expected) => {
    const result = subsets(input);
    expect(result.length).toEqual(expected.length);
    for (const r of result) {
      expect(expected).toContainEqual(r);
    }
    for (const e of expected) {
      expect(result).toContainEqual(e);
    }
  });
});
