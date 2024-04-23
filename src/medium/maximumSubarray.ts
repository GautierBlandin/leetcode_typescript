export function maxSubArrayDivideAndConquer(nums: number[]): number {
  // divide and conquer approach
  return maxSubArrayRecursive(0, nums.length, nums);
}

/**
 * Return the maximum subarray sum in the subarray between start (inclusive) and end (exclusive).
 * @param nums
 * @param start
 * @param end
 */
function maxSubArrayRecursive(start: number, end: number, nums: number[]): number {
  // Approach: find the maximum subarray in the left, the right, and the middle, and return the maximum
  // of the three.
  // Base case where the subarray is of length 1
  if ((end - start) === 1) {
    return nums[start];
  }

  const mid = Math.floor((start + end) / 2);
  const maxLeft = maxSubArrayRecursive(start, mid, nums);
  const maxRight = maxSubArrayRecursive(mid, end, nums);

  let maxSumLeft = -Infinity;
  let currentSumLeft = 0;
  for (let i = mid - 1; i >= start; i -= 1) {
    currentSumLeft += nums[i];
    maxSumLeft = Math.max(maxSumLeft, currentSumLeft);
  }

  let maxSumRight = -Infinity;
  let currentSumRight = 0;
  for (let i = mid; i < end; i += 1) {
    currentSumRight += nums[i];
    maxSumRight = Math.max(maxSumRight, currentSumRight);
  }

  const maxMid = maxSumLeft + maxSumRight;

  return Math.max(maxLeft, maxRight, maxMid);
}

// Kadane's algorithm, O(n) time O(1) space
export function maxSubArray(nums: number[]): number {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}
