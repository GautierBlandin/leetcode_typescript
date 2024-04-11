export function permuteUnique(nums: number[]): number[][] {
  let permutations: number[][] = [[nums[0]]];

  for (let i = 1; i < nums.length; i++) {
    // compute the new permutations with duplicates
    const newPermutations: number[][] = [];
    for (let j = 0; j <= i; j++) {
      for (let k = 0; k < permutations.length; k++) {
        newPermutations.push([...permutations[k].slice(0, j), nums[i], ...permutations[k].slice(j)]);
      }
    }

    // remove duplicates
    for (let j = 0; j < newPermutations.length; j++) {
      const toMatch = newPermutations[j];
      let k = j + 1;
      while (k < newPermutations.length) {
        if (subPermAreEqual(toMatch, newPermutations[k])) {
          newPermutations.splice(k, 1);
        } else {
          k++;
        }
      }
    }

    permutations = newPermutations;
  }

  return permutations;
}

function subPermAreEqual(a: number[], b: number[]) {
  // we assume equal length
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
