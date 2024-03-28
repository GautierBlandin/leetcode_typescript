import { findFirstAndLastPosition } from './FirstAndLastPositionSortedArray';

describe('firstAndLastPositionSortedArray', () => {
  it('should work on empty array', () => {
    expect(findFirstAndLastPosition(2, [])).toEqual([-1, -1]);
  });

  it('should work on unique element', () => {
    expect(findFirstAndLastPosition(2, [1, 2, 3, 4, 5])).toEqual([1, 1]);
  });

  it('should work on multiple elements', () => {
    expect(findFirstAndLastPosition(8, [5, 7, 7, 8, 8, 10])).toEqual([3, 4]);
  });

  it('should work on multiple elements', () => {
    expect(findFirstAndLastPosition(6, [5, 7, 7, 8, 8, 10])).toEqual([-1, -1]);
  });
});
