// Dynamic programming approach
function longestPalindrome(s: string): string {
  // Table to represent the palindromes.
  // If dbTable[i][j] is true, then s.slice(i, j) is a palindrome
  const dpTable: boolean[][] = new Array(s.length + 1).fill(0).map(() => new Array(s.length + 1).fill(false));

  let maxPalindrome: string = '';

  for (let i = s.length; i >= 0; i -= 1) {
    for (let j = i; j < s.length + 1; j += 1) {
      // s.slice(i, j) is a palindrome if:
      // - s[i] and s[j] are equal AND s.slice(i + 1, j - 1) is a palindrome OR
      // - i and j are equal (empty string) OR
      // - i and j differ by 1 (single-char string)
      if (j - i <= 1) {
        dpTable[i][j] = true;
      } else if (dpTable[i + 1][j - 1] && s[i] === s[j - 1]) {
        dpTable[i][j] = true;
      }

      if (dpTable[i][j] && j - i + 1 > maxPalindrome.length) {
        maxPalindrome = s.slice(i, j);
      }
    }
  }

  return maxPalindrome;
}

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
