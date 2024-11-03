/**
 * Problem statement:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

export function twoSum(nums: number[], target: number): [number, number] {
  // Index the array
  const indexedArray: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (indexedArray.has(target - nums[i])) {
      return [indexedArray.get(target - nums[i])!, i];
    }
    indexedArray.set(nums[i], i);
  }

  throw new Error('Target not found');
}

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
