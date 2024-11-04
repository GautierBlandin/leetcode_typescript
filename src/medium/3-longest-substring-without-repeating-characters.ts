export function lengthOfLongestSubstring(s: string): number {
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
