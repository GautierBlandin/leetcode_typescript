import { isNumber } from './validNumber';

describe('validNumber', () => {
  it.each(['2', '0089', '-0.1', '+3.14', '4.', '-.9', '2e10', '-90E3', '3e+7', '+6e-1', '53.5e93', '-123.456e789'])(
    'should return true for valid number string %s',
    (str: string) => {
      expect(isNumber(str)).toBe(true);
    },
  );
  it.each(['abc', '1a', '1e', 'e3', '99e2.5', '--6', '-+3', '95a54e53'])(
    'should return false for invalid number string %s',
    (str: string) => {
      expect(isNumber(str)).toBe(false);
    },
  );
});
