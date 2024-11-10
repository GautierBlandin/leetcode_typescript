export function isMatch(s: string, p: string): boolean {
  /*
   * dpTable[i][j] is true if s.slice(i) matches p.slice(j)
   * The overall match is true if at the end of the algorithm, dpTable[s.length][p.length] is true
   */
  const dpTable = Array.from({ length: s.length + 1 }).map(() => Array.from({ length: p.length + 1 }, () => false));

  for (let i = 0; i < s.length + 1; i += 1) {
    for (let j = 0; j < p.length + 1; j += 1) {
      // s[i - 1] is the character we are working with in the string
      // p[j - 1] is the character we are working with in the pattern
      if (i < 0 || j < 0) {
        continue;
      }
      if (i === 0 && j === 0) {
        // Empty pattern matches with empty string
        dpTable[i][j] = true;
      } else if (j === 0) {
        // j === 0 means that we slice the pattern at 0, aka the pattern is empty. An empty pattern doesn't match with anything non-empty.
        dpTable[i][j] = false;
      } else if (i === 0) {
        // i === 0 means that we slice the string at 0, aka the string is empty. A match is only possible with star patterns.
        dpTable[i][j] = p[j - 1] === '*' && dpTable[i][j - 2];
      } else if (p[j - 1] === '*') {
        // In case the pattern character is a star, a match is present if:
        // - The string character matches with the character preceding the star
        // - OR The string matches with the pattern with the star combination (star + preceding character) removed
        dpTable[i][j] = (singleCharMatcher(s[i - 1], p[j - 2]) && dpTable[i - 1][j]) || dpTable[i][j - 2];
      } else {
        dpTable[i][j] = singleCharMatcher(s[i - 1], p[j - 1]) && dpTable[i - 1][j - 1];
      }
    }
  }

  return dpTable[s.length][p.length];
}

function singleCharMatcher(c: string, pc: string | undefined): boolean {
  return (c === pc || pc === '.');
}
