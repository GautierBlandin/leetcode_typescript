export function canJump(nums: number[]): boolean {
  let maxRange: number = 0;
  const n = nums.length;
  let currentIndex = 0;

  while (maxRange < n - 1) {
    if (currentIndex > maxRange) return false;
    maxRange = Math.max(maxRange, currentIndex + nums[currentIndex]);
    currentIndex += 1;
  }

  return true;
}
