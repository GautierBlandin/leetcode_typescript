export function permuteUnique(nums: number[]): number[][] {
  let permutations: number[][] = [[nums[0]]];

  for (let i = 1; i < nums.length; i++) {
    // compute the new permutations with duplicates
    const newPermutations: number[][] = [];
    const newPermutationSet: Set<string> = new Set();
    for (let j = 0; j <= i; j++) {
      for (let k = 0; k < permutations.length; k++) {
        const newPermutation = [...permutations[k].slice(0, j), nums[i], ...permutations[k].slice(j)];
        const hash = newPermutation.join(',');
        if (!newPermutationSet.has(hash)) {
          newPermutations.push(newPermutation);
          newPermutationSet.add(hash);
        }
      }
    }
    permutations = newPermutations;
  }

  return permutations;
}
