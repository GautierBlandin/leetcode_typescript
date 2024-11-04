import { lengthOfLongestSubstring } from './3-longest-substring-without-repeating-characters';

describe('lengthOfLongestSubstring', () => {
  it('works on example 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('works on example 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('works on example 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('returns 0 for the empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('returns the full string length for a string of only differing characters', () => {
    expect(lengthOfLongestSubstring('abcdefg')).toBe(7);
  });

  it('returns 2 for a string of several repeated characters', () => {
    expect(lengthOfLongestSubstring('aaaabbbbcccc')).toBe(2);
  });

  it('works for a string of length 1', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });
});
