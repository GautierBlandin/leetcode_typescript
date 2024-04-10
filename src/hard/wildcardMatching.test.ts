import { isMatch } from './wildcardMatching';

describe('wildcardMatching', () => {
  it('should match', () => {
    expect(isMatch('a', 'a')).toBe(true);
  });

  it('should match 2', () => {
    expect(isMatch('a', '?')).toBe(true);
  });

  it('should match 3', () => {
    expect(isMatch('a', '*')).toBe(true);
  });

  it('should match 4', () => {
    expect(isMatch('abc', 'a?c')).toBe(true);
  });

  it('should match 4', () => {
    expect(isMatch('abc', 'a*')).toBe(true);
  });

  it('should match 5', () => {
    expect(isMatch('abcd', 'a*d')).toBe(true);
  });

  it('should match 6', () => {
    expect(isMatch('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '**************************'));
  });

  it('should match 6', () => {
    expect(isMatch('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '*********************************************************'));
  });

  it('should match failed test', () => {
    expect(isMatch('adceb', '*a*b')).toBe(true);
  });
});
