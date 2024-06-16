import { findRotationPoint, search } from './81searchInRotatedArrayII';

describe('searchInRotatedArray', () => {
  it.each([
    [{ nums: [2, 5, 6, 0, 0, 1, 2], target: 0 }, true],
    [{ nums: [2, 5, 6, 0, 0, 1, 2], target: 3 }, false],
  ])('should work', (input, expected) => {
    expect(search(input.nums, input.target)).toBe(expected);
  });
});

describe('findRotationPoint', () => {
  it('should work first case', () => {
    expect(findRotationPoint([6, 0, 0, 1, 2, 2, 5])).toBe(1);
  });

  it.each([
    [[0, 0, 1, 2, 2, 5, 6], 0],
    [[6, 0, 0, 1, 2, 2, 5], 1],
    [[5, 6, 0, 0, 1, 2, 2], 2],
    [[2, 5, 6, 0, 0, 1, 2], 3],
    [[2, 2, 5, 6, 0, 0, 1], 4],
    [[1, 2, 2, 5, 6, 0, 0], 5],
    [[0, 1, 2, 2, 5, 6, 0], 6],
  ])('should work', (input, expected) => {
    expect(findRotationPoint(input)).toBe(expected);
  });
});
