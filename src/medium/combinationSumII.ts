/**
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 *
 *
 * Example 1:
 *
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * Example 2:
 *
 * Input: candidates = [2,5,2,1,2], target = 5
 * Output:
 * [
 * [1,2,2],
 * [5]
 * ]
 *
 *
 * Constraints:
 *
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30
 */

export function combinationSum2(candidates: number[], target: number): number[][] {
  const filteredCandidates = filterCandidates(candidates, target);

  const solutions = recursiveCombinationSum2(filteredCandidates, target);

  const sortedSolutions = solutions.map((solution) => solution.sort());

  for (let i = 0; i < sortedSolutions.length; i++) {
    const uniqueSolution = sortedSolutions[i];
    let j = i + 1;
    while (j < sortedSolutions.length) {
      if (arrayAreEqual(uniqueSolution, sortedSolutions[j])) {
        sortedSolutions.splice(j, 1);
      } else {
        j++;
      }
    }
  }

  return sortedSolutions;
}

function recursiveCombinationSum2(candidates: number[], target: number): number[][] {
  if (candidates.length === 0 || target <= 0 || sum(candidates) < target) return [];

  const solutions: number[][] = [];

  if ((target - candidates[0]) === 0) solutions.push([candidates[0]]);

  solutions.push(...recursiveCombinationSum2(candidates.slice(1), target));

  solutions.push(...recursiveCombinationSum2(candidates.slice(1), target - candidates[0])
    .map((solution) => [candidates[0], ...solution]));

  return solutions;
}

function arrayAreEqual(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

function filterCandidates(candidates: number[], target: number): number[] {
  const candidateMap: Map<number, number> = new Map();

  candidates.forEach((candidate) => {
    if (candidateMap.has(candidate)) {
      candidateMap.set(candidate, candidateMap.get(candidate)! + 1);
    } else {
      candidateMap.set(candidate, 1);
    }
  });

  const newCandidates: number[] = [];
  for (const [candidate, count] of candidateMap.entries()) {
    for (let i = 0; i < Math.min(count, Math.floor(target / candidate)); i += 1) {
      newCandidates.push(candidate);
    }
  }

  return newCandidates;
}

function sum(nums: number[]): number {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
