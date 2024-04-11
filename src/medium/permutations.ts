export function permuteRecursive(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [[nums[0]]];
  }

  const n = nums.length;
  const lastNum = nums.pop() as number;
  const subPermutations = permuteRecursive(nums);
  const newPermutations: number[][] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < subPermutations.length; j++) {
      newPermutations.push([...subPermutations[j].slice(0, i), lastNum, ...subPermutations[j].slice(i, n)]);
    }
  }

  return newPermutations;
}

export function permute(nums: number[]): number[][] {
  let permutations: number[][] = [[nums[0]]];

  for (let i = 1; i < nums.length; i++) {
    const newPermutations: number[][] = [];
    for (let j = 0; j <= i; j++) {
      for (let k = 0; k < permutations.length; k++) {
        newPermutations.push([...permutations[k].slice(0, j), nums[i], ...permutations[k].slice(j)]);
      }
    }
    permutations = newPermutations;
  }

  return permutations;
}
