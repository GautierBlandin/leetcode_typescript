/* eslint-disable no-param-reassign */
export type NumberOfUniqueElements = number;

export function removeDuplicatesFromSortedList(sortedList: number[]): NumberOfUniqueElements {
  if (sortedList.length === 0) {
    return 0;
  }

  if (sortedList.length === 1) {
    return 1;
  }

  let k = 1;
  let sortedPointer: number = 1;
  let followingPointer: number = 0;
  let currentNumber: number = sortedList[0];

  while (followingPointer < sortedList.length) {
    while (followingPointer < sortedList.length && sortedList[followingPointer] === currentNumber) {
      followingPointer += 1;
    }

    if (followingPointer >= sortedList.length) break;

    sortedList[sortedPointer] = sortedList[followingPointer];
    k += 1;
    sortedPointer += 1;
    currentNumber = sortedList[followingPointer];
    followingPointer += 1;
  }

  return k;
}
