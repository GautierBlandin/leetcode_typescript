import { longestValidParenthesis } from './longestValidParenthesis';

describe('longest valid parenthesis', () => {
  it('should work with (()', () => {
    expect(longestValidParenthesis('(()')).toEqual({
      maxValidLength: 2,
    });
  });

  it('should work with )()())', () => {
    expect(longestValidParenthesis(')()())')).toEqual({
      maxValidLength: 4,
    });
  });

  it('should work with empty string', () => {
    expect(longestValidParenthesis('')).toEqual({
      maxValidLength: 0,
    });
  });

  it('should work with several valid sequences', () => {
    expect(longestValidParenthesis('()())((())()))(')).toEqual({
      maxValidLength: 8,
    });
  });

  it('should work with weird case ()(()', () => {
    expect(longestValidParenthesis('()(()')).toEqual({
      maxValidLength: 2,
    });
  });

  it('should work with edge-case', () => {
    expect(longestValidParenthesis('()()()(((((((((((((((')).toEqual({
      maxValidLength: 6,
    });
  });

  it('should work with edge-case', () => {
    expect(longestValidParenthesis('()()((()(((((((((((((((')).toEqual({
      maxValidLength: 4,
    });
  });
});
