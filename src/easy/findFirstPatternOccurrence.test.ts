import { computePolynomialModP, strStr } from './findFirstPatternOccurrence';

describe('firstFirstPatternOccurrence', () => {
  it('should work on a basic example', () => {
    const matched = 'sadbutsad';
    const pattern = 'sad';

    expect(strStr(matched, pattern)).toEqual(0);
  });

  it('should return -1 when there is no match', () => {
    const matched = 'leetcode';
    const pattern = 'leeto';

    expect(strStr(matched, pattern)).toEqual(-1);
  });

  it('should work when the match is near the beginning', () => {
    const matched = 'asadbutdad';
    const pattern = 'sad';

    expect(strStr(matched, pattern)).toEqual(1);
  });

  it('should work when the pattern is near the end', () => {
    const matched = 'adadbutsadsd';
    const pattern = 'sad';

    expect(strStr(matched, pattern)).toEqual(7);
  });

  it('should work when the match is at the end', () => {
    const matched = 'adbutsad';
    const pattern = 'sad';

    expect(strStr(matched, pattern)).toEqual(5);
  });

  it('should work on failed test case', () => {
    const matched = 'ababbbbaaabbbaaa';
    const pattern = 'bbbb';

    expect(strStr(matched, pattern)).toEqual(3);
  });
});

describe('computePolynomialModP', () => {
  const coefficients = [1, 2, 3, 4, 5];
  it('should compute test 1', () => {
    expect(computePolynomialModP(coefficients, 10)).toEqual(5);
  });

  it('should compute test 2', () => {
    expect(computePolynomialModP(coefficients, 11)).toEqual(4);
  });

  it('should compute test 3', () => {
    expect(computePolynomialModP(coefficients, 10)).toEqual(9); // 1 + 4 + 12 + 32 + 80
  });

  it('should return 0 for empty polynomial', () => {
    expect(computePolynomialModP([], 10)).toEqual(0);
  });
});
