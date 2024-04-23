import { maxSubArray } from './maximumSubarray';

describe('maximum subarray', () => {
  it('should work on example 1', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  it('should work on example 2', () => {
    expect(maxSubArray([1])).toEqual(1);
  });

  it('should work on example 3', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
  });

  it('should work on all negative array', () => {
    expect(maxSubArray([-1, -2, -3, -4, -5])).toEqual(-1);
  });

  it('should work on all positive array', () => {
    expect(maxSubArray([1, 2, 3, 4, 5, 6])).toEqual(21);
  });
});
