import { simplifyPath } from './simplifyPath';

describe('simplifyPath', () => {
  it.each([
    ['/home/', '/home'],
    ['/home//foo/', '/home/foo'],
    ['/home/user/Documents/../Pictures', '/home/user/Pictures'],
    ['/../', '/'],
    ['/', '/'],
    ['/.../a/../b/c/../d/./', '/.../b/d'],
  ])('when input is %s, it should return %s', (input, expected) => {
    expect(simplifyPath(input)).toBe(expected);
  });
});
