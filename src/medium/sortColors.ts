export function sortColors(nums: number[]): void {
  let zeroCount = 0;
  let oneCount = 0;

  for (let i = 0; i < nums.length; i += 1) {
    switch (nums[i]) {
      case 0:
        zeroCount += 1;
        break;
      case 1:
        oneCount += 1;
        break;
      default:
        break;
    }
  }

  let i = 0;
  while (i < zeroCount) {
    nums[i] = 0;
    i += 1;
  }

  while (i < zeroCount + oneCount) {
    nums[i] = 1;
    i += 1;
  }

  while (i < nums.length) {
    nums[i] = 2;
    i += 1;
  }
}
