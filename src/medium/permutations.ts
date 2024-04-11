export function permute(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [[nums[0]]];
  }

  const n = nums.length;
  const lastNum = nums.pop() as number;
  const subPermutations = permute(nums);
  const newPermutations: number[][] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < subPermutations.length; j++) {
      newPermutations.push([...subPermutations[j].slice(0, i), lastNum, ...subPermutations[j].slice(i, n)]);
    }
  }

  return newPermutations;
}
