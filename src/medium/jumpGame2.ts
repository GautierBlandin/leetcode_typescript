export function jump(nums: number[]): number {
  let jumps: number = 0;
  let maxReach: number = 0;
  let currentEnd: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > currentEnd) {
      jumps += 1;
      currentEnd = maxReach;
    }

    if (currentEnd >= nums.length) return jumps;

    maxReach = Math.max(i + nums[i], maxReach);
  }

  return jumps;
}
