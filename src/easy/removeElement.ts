export type ElementToRemove = number;
export type Element = number;
export type Index = number;
type NumberOfElementsDifferentFromVal = number;

export function removeElement(nums: Element[], val: ElementToRemove): NumberOfElementsDifferentFromVal {
  let writeIndex: Index = 0;
  let writeFromIndex: Index = 0;
  let numberOfNotValElement: NumberOfElementsDifferentFromVal = 0;

  while (writeFromIndex < nums.length) {
    while (writeFromIndex < nums.length && nums[writeFromIndex] === val) {
      writeFromIndex += 1;
    }

    if (writeFromIndex >= nums.length) break;

    // eslint-disable-next-line no-param-reassign
    nums[writeIndex] = nums[writeFromIndex];

    numberOfNotValElement += 1;
    writeIndex += 1;
    writeFromIndex += 1;
  }

  return numberOfNotValElement;
}
