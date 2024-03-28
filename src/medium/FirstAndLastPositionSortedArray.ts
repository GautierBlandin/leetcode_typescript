/**
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * Example 2:
 *
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * Example 3:
 *
 * Input: nums = [], target = 0
 * Output: [-1,-1]
 *
 *
 * Constraints:
 *
 * 0 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 * nums is a non-decreasing array.
 * -109 <= target <= 109
 */

export function findFirstAndLastPosition(target: number, arr: number[]): [number, number] {
  if (arr.length === 0) return [-1, -1];

  const loIndex = findLowIndex(target, arr);

  if (loIndex === -1) return [-1, -1];
  const hiIndex = findHighIndex(target, arr);

  return [loIndex, hiIndex];
}

function findLowIndex(target: number, arr: number[]): number {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  if (lo < arr.length && arr[lo] === target) return lo;

  return -1;
}

function findHighIndex(target: number, arr: number[]): number {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (arr[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  if (hi >= 0 && arr[hi] === target) return hi;

  return -1;
}
