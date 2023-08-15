import { coinChange } from './coinChange';

describe('coinChange', () => {
  it('should work on simple example 1', () => {
    const coins = [1, 2, 5];
    const amount = 11;

    const coinAmount = coinChange(coins, amount);

    expect(coinAmount).toEqual(3);
  });

  it('should work on simple example 2', () => {
    const coins = [2];
    const amount = 3;

    const coinAmount = coinChange(coins, amount);

    expect(coinAmount).toEqual(-1);
  });

  it('should work on null example', () => {
    expect(coinChange([1], 0)).toEqual(0);
  });
});
