export function coinChange(coins: number[], amount: number): number {
  const cache: number[] = new Array(amount);
  cache[0] = 0;

  for (let subAmount = 1; subAmount <= amount; subAmount++) {
    const subCoinAmounts = [];
    for (const coinValue of coins) {
      if (subAmount - coinValue >= 0 && cache[subAmount - coinValue] !== -1) {
        subCoinAmounts.push(cache[subAmount - coinValue]);
      }
    }
    if (subCoinAmounts.length === 0) {
      cache[subAmount] = -1;
    } else {
      const minSubAmount = Math.min(...subCoinAmounts);
      cache[subAmount] = minSubAmount + 1;
    }
  }
  return cache[amount];
}
