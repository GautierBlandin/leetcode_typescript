export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  result.push([]);

  for (let i = 0; i < nums.length; i += 1) {
    const currentResultLength = result.length;

    for (let j = 0; j < currentResultLength; j += 1) {
      result.push([...result[j], nums[i]]);
    }
  }

  return result;
}

export function subsetsComb(nums: number[]): number[][] {
  const result: number[][] = [];

  result.push([]);

  for (let i = 1; i <= nums.length; i += 1) {
    const iCombinationIndexes = combine(nums.length, i);

    for (const comb of iCombinationIndexes) {
      const numComb: number[] = [];
      for (const j of comb) {
        numComb.push(nums[j - 1]);
      }
      result.push(numComb);
    }
  }

  return result;
}

function combine(n: number, k: number): number[][] {
  const pointers = new Array(k).fill(undefined).map((_, index) => index + 1);
  const result: number[][] = [[...pointers]];

  while (true) {
    let updated = false;

    for (let j = 0; j < k; j += 1) {
      if (pointers[k - 1 - j] < n - j) {
        updated = true;
        pointers[k - 1 - j] += 1;

        for (let i = 1; i < j + 1; i += 1) {
          pointers[k - 1 - j + i] = pointers[k - 1 - j] + i;
        }

        break;
      }
    }

    if (updated) {
      result.push([...pointers]);
    } else {
      break;
    }
  }

  return result;
}
