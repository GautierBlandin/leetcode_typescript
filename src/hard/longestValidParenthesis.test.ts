import { longestValidParenthesisObject } from './longestValidParenthesis';

describe('longest valid parenthesis', () => {
  it('should work with (()', () => {
    expect(longestValidParenthesisObject('(()')).toEqual({
      maxValidLength: 2,
    });
  });

  it('should work with )()())', () => {
    expect(longestValidParenthesisObject(')()())')).toEqual({
      maxValidLength: 4,
    });
  });

  it('should work with empty string', () => {
    expect(longestValidParenthesisObject('')).toEqual({
      maxValidLength: 0,
    });
  });

  it('should work with several valid sequences', () => {
    expect(longestValidParenthesisObject('()())((())()))(')).toEqual({
      maxValidLength: 8,
    });
  });

  it('should work with weird case ()(()', () => {
    expect(longestValidParenthesisObject('()(()')).toEqual({
      maxValidLength: 2,
    });
  });

  it('should work with edge-case', () => {
    expect(longestValidParenthesisObject('()()()(((((((((((((((')).toEqual({
      maxValidLength: 6,
    });
  });

  it('should work with edge-case', () => {
    expect(longestValidParenthesisObject('()()((()(((((((((((((((')).toEqual({
      maxValidLength: 4,
    });
  });
});
