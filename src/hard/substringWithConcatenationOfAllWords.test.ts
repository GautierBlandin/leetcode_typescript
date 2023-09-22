import { findSubstring, verifyMatch } from './substringWithConcatenationOfAllWords';

describe('findSubstring', () => {
  it('should work on leetcode test 1', () => {
    expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9]);
  });

  it('should work on leetcode test 2', () => {
    expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([]);
  });

  it('should work on leetcode test 3', () => {
    expect(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])).toEqual([6, 9, 12]);
  });

  it('should work when the concat is in the last position', () => {
    expect(findSubstring('thebarman', ['man', 'bar'])).toEqual([3]);
  });

  it('should work on failing test', () => {
    const s = 'a'.repeat(8000);
    const words = Array(3000).fill('a');
    const expected = Array(5001).fill(0).map((_value, index) => index);

    expect(findSubstring(s, words)).toEqual(expected);
  });
});

describe('verifyMatch', () => {
  it('should return true in the base case', () => {
    expect(verifyMatch('', [])).toBe(true);
  });

  it('should return true in a simple case', () => {
    expect(verifyMatch('foo', ['foo'])).toBe(true);
  });

  it('should work in a two element case', () => {
    expect(verifyMatch('foobar', ['foo', 'bar'])).toBe(true);
  });

  it('should work when elements are reversed', () => {
    expect(verifyMatch('foobar', ['bar', 'foo'])).toBe(true);
  });

  it('should work in a 5 elements case', () => {
    expect(verifyMatch('foobarabghkl', ['bar', 'kl', 'foo', 'gh', 'ab'])).toBe(true);
  });

  it('should return false when there is no match', () => {
    expect(verifyMatch('foobarbaz', ['foo', 'bza', 'bar'])).toBe(false);
  });
});
