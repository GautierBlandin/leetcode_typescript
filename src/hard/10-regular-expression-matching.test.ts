import { isMatch } from './10-regular-expression-match';

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

  it.each(['', 'a', 'aa', 'aaa', 'aaaa', 'aaaaa'])('%s matches with a*', (arg) => {
    expect(isMatch(arg, 'a*')).toBe(true);
  });

  it.each(['', 'bc', 'bd', 'aaaa', 'feafda'])('%s does not match with ba*', (arg) => {
    expect(isMatch(arg, 'ba*')).toBe(false);
  });

  it('matches bbba with b*a', () => {
    expect(isMatch('bbba', 'b*a')).toBe(true);
  });

  it.each(['a', 'ba', 'bba', 'bbba', 'bbbba', 'bbbbbba'])('%s matches with b*a', (arg) => {
    expect(isMatch(arg, 'b*a')).toBe(true);
  });

  it('works on a somewhat complex expression', () => {
    expect(isMatch('theworldisabeautifulplace', 't.e.*isabeau.....pl.*')).toBe(true);
  });

  it('works on a somewhat complex expression', () => {
    expect(isMatch('theworldisabeautifulplace', 't.e*isabeau.....placd')).toBe(false);
  });
});
