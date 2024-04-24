import { merge } from './mergeIntervals';

describe('merge intervals', () => {
  it('should work on example 1', () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
  });

  it('should work on example 2', () => {
    expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
  });
});
