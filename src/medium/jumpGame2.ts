export function jump(nums: number[]): number {
  const n = nums.length;
  const jumpNumbers = new Array(n).fill(-1);
  jumpNumbers[n - 1] = 0;
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    if (nums[i] !== 0) {
      jumpNumbers[i] = Math.min(...jumpNumbers.slice(i + 1, i + nums[i] + 1)
        .filter((num) => num !== -1)
        .map((num) => num + 1));
    }
  }
  return jumpNumbers[0];
}
