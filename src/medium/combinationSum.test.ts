import { combinationSum } from './combinationSum';

describe('combinationSum', () => {
  it('should work on example 1', () => {
    const output = combinationSum([2, 3, 6, 7], 7);

    testOutput(output, [[2, 2, 3], [7]]);
  });

  it('should work on example 2', () => {
    const output = combinationSum([2, 3, 5], 8);

    testOutput(output, [[2, 2, 2, 2], [2, 3, 3], [3, 5]]);
  });

  it('should work on example 3', () => {
    expect(combinationSum([2], 1)).toEqual([]);
  });
});

function testOutput(output: number[][], expected: number[][]) {
  const sortedOutput = output.map((singleOuput) => singleOuput.sort());

  expected.forEach((singleExpected) => {
    expect(sortedOutput).toContainEqual(singleExpected);
  });
}
