export function removeDuplicates(nums: number[]): number {
  let writePointer: number = 0;
  let readPointer: number = 0;
  let currentCounter: number = 0;
  let currentNumber: number = NaN;

  while (readPointer < nums.length) {
    if (nums[readPointer] !== currentNumber) {
      currentNumber = nums[readPointer];
      currentCounter = 1;
      nums[writePointer] = currentNumber;
      writePointer += 1;
    } else if (currentCounter < 2) {
      currentCounter += 1;
      nums[writePointer] = currentNumber;
      writePointer += 1;
    }
    readPointer += 1;
  }

  return writePointer;
}
