export function coinChange(coins: number[], amount: number): number {
  if (amount < 0) {
    return -1;
  }

  if (amount === 0) {
    return 0;
  }

  const subValues = [];
  for (const coinValue of coins) {
    const subValue = coinChange(coins, amount - coinValue);
    if (subValue !== -1) {
      subValues.push(subValue + 1);
    }
  }

  if (subValues.length === 0) {
    return -1;
  }

  return Math.min(...subValues);
}
