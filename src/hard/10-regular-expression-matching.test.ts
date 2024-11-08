export function isMatchBruteForce(s: string, p: string): boolean {
  if (s.length === 0) {
    return p.length === 0 || (p[0] === '*' && isMatchBruteForce(s, p.slice(1)));
  }

  if (p.length === 0) return false;

  if (p[0] === '*') {
    return isMatchBruteForce(s.slice(1), p) || isMatchBruteForce(s, p.slice(1));
  }

  return (singleCharMatcher(s[0], p[0]) && isMatchBruteForce(s.slice(1), p.slice(1)));
}

function singleCharMatcher(c: string, pc: string): boolean {
  return (c === pc || pc === '.' || pc === '*');
}

describe('isMatch', () => {
  it('matches a with a', () => {
    expect(isMatch('a', 'a')).toBe(true);
  });

  it('does not match a with b', () => {
    expect(isMatch('a', 'b')).toBe(false);
  });

  it('matches . with at least one character', () => {
    expect(isMatch('', '.')).toBe(false);
  });

  it.each(['a', 'b', 'c', 'd', 'e'])('%s matches with .', (arg) => {
    expect(isMatch(arg, '.')).toBe(true);
  });

  it.each(['', 'a, aa, ab, ba, adb, adcf'])('%s matches with *', (arg) => {
    expect(isMatch(arg, '*')).toBe(true);
  });

  it.each(['a', 'aa, ab, abc, aaa, adcb'])('%s matches with a*', (arg) => {
    expect(isMatch(arg, 'a*')).toBe(true);
  });

  it.each(['', 'b', 'ba', 'baaa', 'feafda'])('%s does not match with a*', (arg) => {
    expect(isMatch(arg, 'a*')).toBe(false);
  });

  it.each(['a', 'aa', 'ba', 'aba', 'bcdfa', 'aaaaa'])('%s matches with *a', (arg) => {
    expect(isMatch(arg, '*a')).toBe(true);
  });

  it.each(['ab', 'aiuoiuob', 'asb', 'aab', 'abb'])('%s matches with a*b', (arg) => {
    expect(isMatch(arg, 'a*b')).toBe(true);
  });

  it('handles multiple * in a row', () => {
    expect(isMatch('abc', 'a**c')).toBe(true);
  });

  it('works on a somewhat complex expression', () => {
    expect(isMatch('theworldisabeautifulplace', 't.e*isabeau.....pl*')).toBe(true);
  });

  it('works on a somewhat complex expression', () => {
    expect(isMatch('theworldisabeautifulplace', 't.e*isabeau.....placd')).toBe(false);
  });
});
