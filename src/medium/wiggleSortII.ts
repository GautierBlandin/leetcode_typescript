export function wiggleSort(nums: number[]): void {
  if (nums.length === 1 || nums.length === 0) {
    return;
  }

  nums.sort((a, b) => (a - b));
  const { numsLow, numsHigh } = getSplitArray();

  console.log(numsHigh);
  console.log(numsLow);

  const wiggleSorted: number[] = [];
  while (numsHigh.length > 0 && numsLow.length > 0) {
    wiggleSorted.push(numsLow.pop() as number);
    wiggleSorted.push(numsHigh.pop() as number);
  }

  if (numsHigh.length > 0) {
    wiggleSorted.push(numsHigh.pop() as number);
  }

  if (numsLow.length > 0) {
    wiggleSorted.push(numsLow.pop() as number);
  }

  for (let i = 0; i < nums.length; i++) {
    // eslint-disable-next-line no-param-reassign
    nums[i] = wiggleSorted[i];
  }

  function getSplitArray() {
    if (nums.length % 2 === 0) {
      return {
        numsLow: [...nums.slice(0, Math.floor(nums.length / 2))],
        numsHigh: [...nums.slice(Math.floor(nums.length / 2))],
      };
    }
    return {
      numsLow: [...nums.slice(0, Math.floor(nums.length / 2) + 1)],
      numsHigh: [...nums.slice(Math.floor(nums.length / 2) + 1)],
    };
  }
}
