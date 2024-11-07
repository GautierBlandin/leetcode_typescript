import { longestPalindrome } from './5-longest-palindromic-substring';

describe('longestPalindrome', () => {
  it('works for example 1', () => {
    expect(['aba', 'bab']).toContain(longestPalindrome('babad'));
  });

  it('works for example 2', () => {
    expect(longestPalindrome('cbbd')).toEqual('bb');
  });

  it('returns the whole string when it is a single-center palindrome', () => {
    expect(longestPalindrome('abcdcba')).toEqual('abcdcba');
  });

  it('returns the whole string when it is a bi-center palindrome', () => {
    expect(longestPalindrome('abcddcba')).toEqual('abcddcba');
  });

  it('returns the whole string when it contains a single letter', () => {
    expect(longestPalindrome('aaaaaaa')).toEqual('aaaaaaa');
  });

  it('returns a single letter when there there is no palindrome', () => {
    expect(['a', 'b', 'c', 'd', 'e', 'f', 'g']).toContain(longestPalindrome('abcdefg'));
  });
});
