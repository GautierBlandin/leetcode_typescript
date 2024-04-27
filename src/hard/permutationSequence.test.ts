import { getPermutation } from './permutationSequence';

describe('permutation sequence', () => {
  it('should work on example 1', () => {
    expect(getPermutation(3, 3)).toEqual('213');
  });

  it('should work on example 2', () => {
    expect(getPermutation(4, 9)).toEqual('2314');
  });

  it('should work on first permutation', () => {
    expect(getPermutation(4, 1)).toEqual('1234');
  });

  it('should work on last permutation', () => {
    expect(getPermutation(4, 24)).toEqual('4321');
  });
});
