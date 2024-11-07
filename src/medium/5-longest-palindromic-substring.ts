// Dynamic programming approach
function longestPalindromeDP(s: string): string {
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

// Expand Around Center approach. Validated against the test suite & LC tests
export function longestPalindrome(s: string): string {
  // Expand around center approach
  let maxPalindrome = '';

  // single-center palindrome
  for (let startPosition = 0; startPosition < s.length; startPosition += 1) {
    let expandInterval = 0;

    while (
      startPosition - expandInterval - 1 >= 0
      && startPosition + expandInterval + 1 < s.length
      && s[startPosition - expandInterval - 1] === s[startPosition + expandInterval + 1]
    ) {
      expandInterval += 1;
    }

    if (maxPalindrome.length < (1 + 2 * (expandInterval))) {
      maxPalindrome = s.slice(startPosition - expandInterval, startPosition + expandInterval + 1);
    }
  }

  // bi-center palindrome
  for (let startPosition = 0; startPosition < s.length; startPosition += 1) {
    let expandInterval = 0;

    while (
      startPosition - expandInterval - 1 >= 0
      && startPosition + expandInterval < s.length
      && s[startPosition - expandInterval - 1] === s[startPosition + expandInterval]
    ) {
      expandInterval += 1;
    }

    if (maxPalindrome.length < (2 * (expandInterval))) {
      maxPalindrome = s.slice(startPosition - expandInterval, startPosition + expandInterval);
    }
  }

  return maxPalindrome;
}

// Brute-force approach. Validated against the test suite & LC test
function longestPalindromeBruteForce(s: string): string {
  let maxPalindrome = '';

  for (let i = 0; i < s.length; i += 1) {
    for (let j = i + 1; j < s.length + 1; j += 1) {
      const sub = s.slice(i, j);
      if (sub.length > maxPalindrome.length && isPalindrome(sub)) {
        maxPalindrome = sub;
      }
    }
  }

  return maxPalindrome;
}

function isPalindrome(s: string): boolean {
  for (let i = 0; i < Math.floor(s.length / 2); i += 1) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
}
