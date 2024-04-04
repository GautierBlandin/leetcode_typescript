import { firstMissingPositive } from './firstMissingPositive';

describe('first missing positive', () => {
  it('should work on simple case', () => {
    expect(firstMissingPositive([1, 2, 0])).toEqual(3);
  });

  it('should work on other case', () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toEqual(2);
  });

  it('should work on third case', () => {
    expect(firstMissingPositive([0, 0, 0])).toEqual(1);
  });
});
