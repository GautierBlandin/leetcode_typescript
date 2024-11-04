export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  let left = 0;
  let right = 1;
  // Because the string is at least of length 2, there is always at least one distinct character
  let maxLength = 1;
  const charSet: Set<string> = new Set([s[0]]);

  while (right < s.length) {
    // If the char at right is a new character, append it to the char set and update max length if applicable
    if (!charSet.has(s[right])) {
      maxLength = Math.max(maxLength, right - left + 1);
      charSet.add(s[right]);
    } else {
      // Otherwise, delete chars from the char set until the left pointer reaches the duplicate
      // Then, increment the left pointer again the leave it right after the duplicate
      while (s[left] !== s[right]) {
        charSet.delete(s[left]);
        left += 1;
      }
      left += 1;
    }

    right += 1;
  }

  return maxLength;
}
