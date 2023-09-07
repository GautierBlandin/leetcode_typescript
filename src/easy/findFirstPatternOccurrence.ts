type StringAreEqual = boolean;
type CharCode = number;
type Hash = number;
type Index = number;

const p = 79;
const c = 8;
const cInverse = 10;

export function strStr(str: string, pattern: string): number {
  const n = str.length;
  const m = pattern.length;

  if (n < m) return -1;
  const cToMminus1 = computeNthPowerModP(m - 1);
  const patternHash = polynomialRollingHash(pattern);

  let matchingIndex: Index = 0;
  let currentHash = polynomialRollingHash(str.substring(0, m));

  while (matchingIndex + m <= n) {
    if (currentHash === patternHash) {
      if (checkStringsAreEqual(pattern, str.substring(matchingIndex, matchingIndex + m))) {
        return matchingIndex;
      }
    }

    if (matchingIndex + m >= n) break;

    // Compute the next hash, increment matching index and go to next step
    const firstCharCode = str.charCodeAt(matchingIndex);
    const nextCharCode = str.charCodeAt(matchingIndex + m);
    currentHash = computeNextHash(currentHash, firstCharCode, nextCharCode, cToMminus1);
    matchingIndex += 1;
  }

  return -1;
}

function computeNextHash(currentHash: number, firstCharCode: CharCode, nextCharCode: CharCode, c_to_m_minus_1: number): Hash {
  return ((((currentHash - firstCharCode) * cInverse + nextCharCode * c_to_m_minus_1) % p) + p) % p;
}

function checkStringsAreEqual(string1: string, string2: string): StringAreEqual {
  if (string1.length !== string2.length) return false;

  for (let i = 0; i < string1.length; i += 1) {
    if (string1[i] !== string2[i]) return false;
  }

  return true;
}

function computeNthPowerModP(n: number) {
  let result = 1;
  for (let i = 0; i < n; i += 1) {
    result = (result * c) % p;
  }
  return result;
}

function polynomialRollingHash(s: string): Hash {
  const charCodes = toCharCodes(s);
  return computePolynomialModP(charCodes, c);
}

function toCharCodes(s: string): CharCode[] {
  const charCodes: CharCode[] = [];
  for (let i = 0; i < s.length; i += 1) {
    charCodes.push(s.charCodeAt(i));
  }
  return charCodes;
}
export function computePolynomialModP(coefficients: number[], x: number) {
  if (coefficients.length === 0) return 0;

  function computePolynomialRecursive(current: number, k: number): number {
    if (k === 0) {
      return (current * x + coefficients[0]) % p;
    }

    const newCurrent = (current * x + coefficients[k]) % p;
    return computePolynomialRecursive(newCurrent, k - 1);
  }

  return computePolynomialRecursive(0, coefficients.length - 1);
}
