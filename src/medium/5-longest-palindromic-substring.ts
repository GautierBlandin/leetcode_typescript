// Expand Around Center approach. Validated against the test suite & LC tests
function longestPalindromeEAC(s: string): string {
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
