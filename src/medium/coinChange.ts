export function coinChangeDP(coins: number[], amount: number): number {
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

export function coinChange(coins: number[], amount: number): number {
  const cache: number[] = new Array(amount).fill(undefined);
  cache[0] = 0;

  return coinChangeRecursive(amount);

  function coinChangeRecursive(subAmount: number): number {
    if (cache[subAmount] !== undefined) {
      return cache[subAmount];
    }

    const subValues = [];
    for (const coinValue of coins) {
      if (subAmount - coinValue >= 0) {
        const subCoinAmount = coinChangeRecursive(subAmount - coinValue);
        if (subCoinAmount !== -1) {
          subValues.push(subCoinAmount + 1);
        }
      }
    }

    if (subValues.length === 0) {
      cache[subAmount] = -1;
      return -1;
    }

    const result = Math.min(...subValues);
    cache[subAmount] = result;
    return result;
  }
}
