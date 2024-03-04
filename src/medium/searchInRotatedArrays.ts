/**
 * There is an integer array nums sorted in ascending order (with distinct values).
 *
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot
 * index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1],
 * ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 *
 * Given the array nums after the possible rotation and an integer target,
 * return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * Example 2:
 *
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * Example 3:
 *
 * Input: nums = [1], target = 0
 * Output: -1
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 5000
 * -104 <= nums[i] <= 104
 * All values of nums are unique.
 * nums is an ascending array that is possibly rotated.
 * -104 <= target <= 104
 */

export function searchInRotatedArray(target: number, arr: number[]) {
  const { rotationIndex } = findRotationPoint(arr);

  let lo: number;
  let hi: number;

  if (target <= arr[arr.length - 1]) {
    lo = rotationIndex;
    hi = arr.length - 1;
  } else {
    lo = 0;
    hi = rotationIndex - 1;
  }

  while (lo < hi) {
    if (arr[lo] === target) return lo;

    const mid = Math.floor((lo + hi + 1) / 2);

    if (arr[mid] <= target) {
      lo = Math.max(mid, lo + 1);
    } else {
      hi = mid;
    }
  }

  return lo;
}

/**
 * @param arr the rotated array
 * @returns rotationIndex the index of the smallest value in the array, e.g 3 for [5, 7, 8, 0, 1, 2, 4]
 */
export function findRotationPoint(arr: number[]): {
  rotationIndex: number,
} {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo < hi) {
    if (arr[lo] <= arr[hi]) {
      return {
        rotationIndex: lo,
      };
    }
    const mid = Math.floor((lo + hi + 1) / 2);
    if (arr[mid] <= arr[hi]) {
      hi = Math.min(hi, mid);
      lo += 1;
    } else if (arr[mid] >= arr[lo]) lo = Math.max(lo, mid);
  }

  return {
    rotationIndex: lo,
  };
}
