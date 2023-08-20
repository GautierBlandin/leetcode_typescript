import {
  binarySearchCondition,
  findElementBiggerThanKElements,
  findMedianSortedArrays,
} from './medianOfTwoSortedArrays';

describe('findMedianSortedArrays', () => {
  it('should pass standard test 1', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2);
  });

  it('should pass standard test 2', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });

  it('should work when one array is empty', () => {
    expect(findMedianSortedArrays([1, 2, 3], [])).toEqual(2);
  });

  it('should work on failed test 1', () => {
    expect(findMedianSortedArrays([-2, -1], [3])).toEqual(-1);
  });
});

describe('findKthBiggestElement', () => {
  describe('should work on simple sorted array', () => {
    const arr1 = [2, 4, 7, 8];
    const arr2 = [1, 3, 5, 6];

    it('should return 1 for k = 0', () => {
      expect(findElementBiggerThanKElements(arr1, arr2, 0)).toEqual(1);
    });

    it('should return 2 for k = 1', () => {
      expect(findElementBiggerThanKElements(arr1, arr2, 1)).toEqual(2);
    });

    it('should return 3 for k = 2', () => {
      expect(findElementBiggerThanKElements(arr1, arr2, 1)).toEqual(2);
    });

    it('should return 4 for k = 3', () => {
      expect(findElementBiggerThanKElements(arr1, arr2, 1)).toEqual(2);
    });

    it('should return 5 for k = 4', () => {
      expect(findElementBiggerThanKElements(arr1, arr2, 1)).toEqual(2);
    });

    it('should return 6 for k = 5', () => {
      expect(findElementBiggerThanKElements(arr1, arr2, 1)).toEqual(2);
    });

    it('should return 7 for k = 6', () => {
      expect(findElementBiggerThanKElements(arr1, arr2, 1)).toEqual(2);
    });

    it('should return 8 for k = 7', () => {
      expect(findElementBiggerThanKElements(arr1, arr2, 1)).toEqual(2);
    });
  });

  describe('should work on special case of one array being empty', () => {
    it('should work with empty array2', () => {
      const array1 = [1, 2, 3];
      const array2: number[] = [];

      expect(findElementBiggerThanKElements(array1, array2, 0)).toEqual(1);
      expect(findElementBiggerThanKElements(array1, array2, 1)).toEqual(2);
      expect(findElementBiggerThanKElements(array1, array2, 2)).toEqual(3);
    });

    it('should work with empty array 1', () => {
      const array1: number[] = [];
      const array2 = [1, 2, 3];

      expect(findElementBiggerThanKElements(array1, array2, 0)).toEqual(1);
      expect(findElementBiggerThanKElements(array1, array2, 1)).toEqual(2);
      expect(findElementBiggerThanKElements(array1, array2, 2)).toEqual(3);
    });
  });
});

describe('binarySearchCondition', () => {
  describe('array1 = [1, 3, 5, 7, 9], array2 = [2, 4]', () => {
    const array1 = [1, 3, 5, 7, 9];
    const array2 = [2, 4];

    it('should return 1 for k = 4, i =4', () => {
      expect(binarySearchCondition(array1, array2, 4, 4)).toEqual(1);
    });

    it('should return 1 for k = 4, i = 3', () => {
      expect(binarySearchCondition(array1, array2, 4, 3)).toEqual(1);
    });

    it('should return 0 for k = 4, i = 2', () => {
      expect(binarySearchCondition(array1, array2, 4, 2)).toEqual(0);
    });

    it('should return -1 for k = 4, i = 1', () => {
      expect(binarySearchCondition(array1, array2, 4, 1)).toEqual(-1);
    });

    it('should return -1 for k = 4, i = 0', () => {
      expect(binarySearchCondition(array1, array2, 4, 0)).toEqual(-1);
    });

    it('should return 1 if i is too big', () => {
      expect(binarySearchCondition(array1, array2, 4, 5)).toEqual(1);
    });

    it('should return 0 for k = 0, i = 0', () => {
      expect(binarySearchCondition(array1, array2, 0, 0)).toEqual(0);
    });

    it('should return -1 for k = 3, i = 1', () => {
      expect(binarySearchCondition(array1, array2, 3, 1)).toEqual(-1);
    });

    it('should return 0 for k = 2, i = 1', () => {
      expect(binarySearchCondition(array1, array2, 2, 1)).toEqual(0);
    });
  });

  describe('array1 = [2, 4], array2 = [1, 3, 5, 7, 9]', () => {
    const array1 = [2, 4];
    const array2 = [1, 3, 5, 7, 9];

    it('should return -1 for k = 4, i = 0', () => {
      expect(binarySearchCondition(array1, array2, 4, 0)).toEqual(-1);
    });

    it('should return -1 for k = 4, i = 1', () => {
      expect(binarySearchCondition(array1, array2, 4, 1)).toEqual(-1);
    });
  });
});
