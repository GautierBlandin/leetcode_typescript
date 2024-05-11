import { minWindow } from './76minimumWindowSubstring';

describe('minimumWindowSubstring', () => {
  it.each([
    [['ADOBECODEBANC', 'ABC'], 'BANC'],
    [['a', 'a'], 'a'],
  ])('should work', (input, expected) => {
    expect(minWindow(input[0], input[1])).toEqual(expected);
  });
});
