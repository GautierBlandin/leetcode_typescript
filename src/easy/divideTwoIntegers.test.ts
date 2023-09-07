import { divideTwoIntegers } from './divideTwoIntegers';

describe('divide two integers', () => {
  it('should divide 6 by 3', () => {
    expect(divideTwoIntegers(6, 3)).toEqual(2);
  });

  it('should divide -10 by -3', () => {
    expect(divideTwoIntegers(-10, -3)).toEqual(3);
  });

  it('should divide -1 000 000 000 by 10', () => {
    expect(divideTwoIntegers(-1000000000, 10)).toEqual(-100000000);
  });
});
