function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let left = 0;
  let right = 1;
  let maxLength = 1;
  const chars: Set<string> = new Set([s[0]]);

  while (right < s.length) {
    if (!chars.has(s[right])) {
      maxLength = Math.max(maxLength, right - left + 1);
      chars.add(s[right]);
    } else {
      while (s[left] !== s[right]) {
        chars.delete(s[left]);
        left += 1;
      }
      left += 1;
    }

    right += 1;
  }

  return maxLength;
}

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
