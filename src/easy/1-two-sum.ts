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
