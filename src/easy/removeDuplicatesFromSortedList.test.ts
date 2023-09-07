import { removeDuplicatesFromSortedList } from './removeDuplicatesFromSortedList';

describe('removeDuplicatesFromSortedList', () => {
  it('should remove duplicates', () => {
    const sortedList = [1, 1, 3, 5, 6, 6, 7, 9, 9, 9, 9, 10, 10];
    const expectedSortedList = [1, 3, 5, 6, 7, 9, 10];

    verify(sortedList, expectedSortedList);
  });

  it('should not remove duplicates when there aint any', () => {
    const sortedList = [1, 2, 3, 4, 5];
    const expectedSortedList = [1, 2, 3, 4, 5];

    verify(sortedList, expectedSortedList);
  });

  it('should work on empty list', () => {
    const sortedList: number[] = [];
    const expectedSortedList: number[] = [];

    verify(sortedList, expectedSortedList);
  });
});

function verify(sortedList: number[], expectedSortedList: number[]) {
  const k = removeDuplicatesFromSortedList(sortedList);

  expect(k).toEqual(expectedSortedList.length);

  for (let i = 0; i < expectedSortedList.length; i += 1) {
    expect(sortedList[i]).toEqual(expectedSortedList[i]);
  }
}
