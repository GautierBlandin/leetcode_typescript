// Given an array of integers nums, we want to find all the distinct triplets (in the sense that the same index doesn't
// appear twice in a given triplet) that sum to 0.
function threeSum(nums: number[]): number[][] {

}

describe('threeSum', () => {
  it('works on a trivial example', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it('works on another trivial example', () => {
    expect(threeSum([-1, 0, 1])).toEqual([0, 0, 0]);
  });
});

// match verifies that result and expected are equal, in the sense that they exactly contain the same triplets.
// The order of the triplets, and the order within the triplets are not considered by matcher.
function matcher({ result, expected }: { result: number[][], expected: number[][] }): boolean {
  if (result.length !== expected.length) return false;

  for (let i = 0; i < expected.length; i += 1) {
    const expectedTriplet = expected[i];

    if (!result.some((resultTriplet) => haveSameContent(resultTriplet, expectedTriplet))) return false;
  }

  return true;
}

// haveSameContent shallowly checks if arr1 and arr2 have the same element and the same count of each element
function haveSameContent<T>(arr1: T[], arr2: T[]): boolean {
  const arr1Map: Map<T, number> = new Map();

  // Create a map that has the elements of arr1 as keys, and their count as value.
  arr1.forEach((element) => {
    if (arr1Map.has(element)) {
      arr1Map.set(element, arr1Map.get(element)! + 1);
    } else {
      arr1Map.set(element, 1);
    }
  });

  // Iterate through the elements of arr2.
  // Finally, once all arr2 has been iterated upon, verify that the count is 0 for every of arr1Map. A positive key would
  // mean that arr1 has an element more instances than arr2.
  for (let i = 0; i < arr2.length; i += 1) {
    // If any element of arr2 is not present in arr1Map, return false, as this means that the two arrays have differing elements.
    if (!arr1Map.has(arr2[i])) return false;

    // Otherwise, decrease the count in arr1Map by one, and return false if the count reaches a negative value, as this would mean
    // that arr2 has an element with more instances than arr1.
    if (arr1Map.get(arr2[i]!) === 0) return false;
    arr1Map.set(arr2[i], arr1Map.get(arr2[i])! - 1);
  }

  return Array.from(arr1Map.values()).every((value) => value === 0);
}

describe('matcher', () => {
  it('matches the empty array', () => {
    expect(matcher({ result: [], expected: [] })).toBe(true);
  });

  it('matches a non-empty array', () => {
    expect(matcher({ result: [[0, 0, 0]], expected: [[0, 0, 0]] })).toBe(true);
  });

  it('does not consider the order of the triplets', () => {
    expect(matcher({ result: [[0, 0, 0], [1, 0, -1]], expected: [[1, 0, -1], [0, 0, 0]] })).toBe(true);
    expect(matcher({ result: [[0, 0, 0], [1, 0, -1]], expected: [[1, 0, -1], [0, 0, 0]] })).toBe(true);
  });

  it('does not consider the order within the triplets', () => {
    expect(matcher({ result: [[-1, 0, 1]], expected: [[1, 0, -1]] })).toBe(true);
  });

  it('returns false when result and expected are of different length', () => {
    expect(matcher({ result: [[-1, 0, 1], [-1, 0, 1]], expected: [[-1, 0, 1]] })).toBe(false);
  });

  it('returns false when a triplet does not match', () => {
    expect(matcher({ result: [[-1, 0, 1], [2, 2, -4]], expected: [[-1, 0, 1], [0, 0, 0]] })).toBe(false);
  });
});
