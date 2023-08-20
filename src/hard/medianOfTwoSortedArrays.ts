export function findMedianSortedArrays(array1: number[], array2: number[]) {
  const n = array1.length;
  const m = array2.length;

  // In case there is an odd number of elements, then the median is the middle element
  if ((n + m) % 2 === 1) {
    return findElementBiggerThanKElements(array1, array2, Math.floor((n + m) / 2));
  }

  // In case there is an even number of elements, then the median is the mean of the two middle elements
  const medianLow = findElementBiggerThanKElements(array1, array2, Math.floor((n + m) / 2) - 1);
  const medianHigh = findElementBiggerThanKElements(array1, array2, Math.floor((n + m) / 2));

  return (medianLow + medianHigh) / 2;
}

export function findElementBiggerThanKElements(array1: number[], array2: number[], k: number): number {
  const n = array1.length;
  const m = array2.length;

  if (k > n + m) throw new Error('k must be smaller than the sum of both arrays');

  // Special case where one of the array is empty:
  if (n === 0) {
    return array2[k];
  }

  if (m === 0) {
    return array1[k];
  }

  // Binary search array 1
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    const i = Math.floor((low + high) / 2);
    const conditionResult = binarySearchCondition(array1, array2, k, i);
    // console.log(`low ${low}, high ${high}, i ${i}, k ${k}, condition result ${conditionResult}`);
    if (conditionResult === 1) {
      high = i - 1;
    } else if (conditionResult === -1) {
      low = i + 1;
    } else {
      return array1[i];
    }
  }

  // If array1 binary search was not successful, binary search array 2
  low = 0;
  high = m - 1;

  while (low <= high) {
    const i = Math.floor((low + high) / 2);
    const conditionResult = binarySearchCondition(array2, array1, k, i);
    // console.log(`low ${low}, high ${high}, i ${i}, k ${k}, condition result ${conditionResult}`);
    if (conditionResult === 1) {
      high = i - 1;
    } else if (conditionResult === -1) {
      low = i + 1;
    } else {
      return array2[i];
    }
  }

  throw new Error('The code should not have gotten here.');
}

/**
 * Test whether i is the element we are looking for. Returns -1 if i is too small, 0 if i is right,
 * 1 if i is too big
 */
export function binarySearchCondition(array1: number[], array2: number[], k: number, i: number): number {
  const m = array2.length;

  // If i > k, i is too big: i can never be bigger than k
  if (i > k) {
    return 1;
  }

  const numberOfElementSmallerThanXInArray2 = k - i;

  // The number of smaller element is bigger than the number of elements in the array
  // i must increase to reduce the number of smaller elements
  if (numberOfElementSmallerThanXInArray2 > m) {
    return -1;
  }

  // The number of smaller elements is 0, i.e every element of the array should be bigger
  // If not (at least one element is smaller), then i must decrease
  if (numberOfElementSmallerThanXInArray2 === 0) {
    if (array1[i] <= array2[0]) {
      return 0;
    }
    return 1;
  }

  // The number of smaller elements is m, i.e every element of the array should be smaller
  // If not (at least one element is bigger, then i must increase
  if (numberOfElementSmallerThanXInArray2 === m) {
    if (array1[i] >= array2[m - 1]) {
      return 0;
    }
    return -1;
  }

  if (array1[i] < array2[numberOfElementSmallerThanXInArray2 - 1]) {
    return -1;
  }

  if (array1[i] > array2[numberOfElementSmallerThanXInArray2]) {
    return 1;
  }
  return 0;
}
