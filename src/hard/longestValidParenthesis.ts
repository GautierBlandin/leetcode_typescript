/**
 * Given a string containing just the characters '(' and ')', return the length of the longest
 * valid (well-formed) parentheses substring
 *
 *
 * Example 1:
 *
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 * Example 2:
 *
 * Input: s = ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()".
 * Example 3:
 *
 * Input: s = ""
 * Output: 0
 *
 *
 * Constraints:
 *
 * 0 <= s.length <= 3 * 104
 * s[i] is '(', or ')'.
 */

export function longestValidParenthesis(s: string) {
  const forwardLongestValid = forwardLongestValidParenthesis(s);
  const backwardLongestValid = forwardLongestValidParenthesis(reverseParenthesis(s));

  return {
    maxValidLength: Math.max(forwardLongestValid.maxValidLength, backwardLongestValid.maxValidLength),
  };
}

function forwardLongestValidParenthesis(s: string) {
  let maxValidLength: number = 0;
  let currentValidLength: number = 0;
  let stack: number = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      stack += 1;
      currentValidLength += 1;
    }
    if (s[i] === ')') {
      if (stack > 0) {
        stack -= 1;
        currentValidLength += 1;
      } else if (stack === 0) {
        maxValidLength = Math.max(maxValidLength, currentValidLength);
        currentValidLength = 0;
      }
    }
  }

  if (stack === 0) {
    maxValidLength = Math.max(maxValidLength, currentValidLength);
  }

  return {
    maxValidLength,
  };
}

function reverseParenthesis(s: string) {
  const arr = Array.from(s);
  const reversed = arr.reverse();
  const remapped = reversed.map((c: string) => {
    if (c === '(') return ')';
    if (c === ')') return '(';
    return '';
  });
  return remapped.join('');
}
