import { searchInsertPosition as searchInsertPosisition, searchInsertPosition } from './searchInsertPosition';

describe('searchInsertPosition', () => {
  it('should work on empty array', () => {
    expect(searchInsertPosition([], 10)).toEqual(0);
  });

  it('should work when the target is found', () => {
    expect(searchInsertPosisition([1, 2, 3, 4], 2)).toEqual(1);
  });

  it('should work when the target is not found', () => {
    expect(searchInsertPosition([1, 2, 5, 6], 3)).toEqual(2);
  });

  it('should work when the target should be inserted at the beginning', () => {
    expect(searchInsertPosition([1, 2, 3, 4], 0)).toEqual(0);
  });

  it('should work when the target should be inserted at the end', () => {
    expect(searchInsertPosition([1, 2, 3, 4], 5)).toEqual(4);
  });

  it('should find the first number', () => {
    expect(searchInsertPosition([1, 2, 3, 4], 1)).toEqual(0);
  });

  it('should find the last number', () => {
    expect(searchInsertPosition([1, 2, 3, 4], 4)).toEqual(3);
  });
});
