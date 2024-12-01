export function search(nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;

  while (right > left) {
    if (target === nums[left] || target === nums[right]) return true;

    if (nums[left] === nums[right]) {
      left += 1;
      right -= 1;
      continue;
    }

    const mid = Math.floor((right + left + 1) / 2);

    if (target === nums[mid]) return true;

    if (nums[left] > nums[mid] && (target > nums[left] || target < nums[mid])) {
      right = Math.min(mid, right - 1);
    } else if (nums[left] < nums[mid] && target > nums[left] && target < nums[mid]) {
      right = Math.min(mid, right - 1);
    } else if (nums[mid] > nums[right] && (target > nums[mid] || target < nums[right])) {
      left = Math.max(mid, left + 1);
    } else if (nums[mid] < nums[right] && target > nums[mid] && target < nums[right]) {
      left = Math.max(mid, left + 1);
    } else {
      return false;
    }
  }

  return target === nums[left] || target === nums[right];
}
