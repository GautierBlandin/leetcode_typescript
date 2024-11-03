import { twoSum } from './1-two-sum';

describe('twoSum', () => {
  it('solves example 1 from leetcode', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('solves example 2 from leetcode', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it('solves example 3 from leetcode', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('does not use the same index twice', () => {
    expect(twoSum([0, 2, 8, -4], 4)).toEqual([2, 3]);
  });
});
