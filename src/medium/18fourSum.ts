export function fourSum(nums: number[], target: number): number[][] {
  const twoSumMap: Map<number, number[][]> = new Map();
  const result: number[][] = [];
  const seenQuadruplets = new Set<string>();

  const prunedNums = pruneInput(nums);

  for (let i = 0; i < prunedNums.length; i += 1) {
    for (let j = i + 1; j < prunedNums.length; j += 1) {
      addToMap(prunedNums[i] + prunedNums[j], [i, j], twoSumMap);
    }
  }

  for (const twoSum of twoSumMap.keys()) {
    if (twoSum > target / 2) continue;
    if (twoSumMap.has(target - twoSum)) {
      const lowIndexes = twoSumMap.get(twoSum)!;
      const highIndexes = twoSumMap.get(target - twoSum)!;

      for (const [i, j] of lowIndexes) {
        for (const [k, l] of highIndexes) {
          if (i !== k && i !== l && j !== k && j !== l) {
            const quad = [prunedNums[i], prunedNums[j], prunedNums[k], prunedNums[l]];
            quad.sort((a, b) => a - b);
            const quadKey = quad.join(',');
            if (!seenQuadruplets.has(quadKey)) {
              result.push(quad);
              seenQuadruplets.add(quadKey);
            }
          }
        }
      }
    }
  }

  return result;
}

function pruneInput(nums: number[]): number[] {
  const pruneMap: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (pruneMap.has(nums[i])) {
      pruneMap.set(nums[i], Math.min(pruneMap.get(nums[i])! + 1, 4));
    } else {
      pruneMap.set(nums[i], 1);
    }
  }

  const sortedKeys = [...pruneMap.keys()].sort((a, b) => a - b);

  const prunedNums: number[] = [];

  for (const key of sortedKeys) {
    for (let i = 0; i < pruneMap.get(key)!; i += 1) {
      prunedNums.push(key);
    }
  }

  return prunedNums;
}

function addToMap(twoSum: number, indexes: number[], twoSumMap: Map<number, number[][]>) {
  if (twoSumMap.has(twoSum)) {
    twoSumMap.set(twoSum, [...twoSumMap.get(twoSum)!, indexes]);
  } else {
    twoSumMap.set(twoSum, [indexes]);
  }
}
