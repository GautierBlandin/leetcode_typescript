export function minDistance(word1: string, word2: string): number {
  const dpTable: number[][] = new Array(word1.length + 1)
    .fill(undefined)
    .map(() => new Array(word2.length + 1)
      .fill(undefined)
      .map(() => -1));

  dpTable[0][0] = 0;

  for (let i = 0; i < word1.length + 1; i += 1) {
    dpTable[i][0] = i;
  }

  for (let j = 0; j < word2.length + 1; j += 1) {
    dpTable[0][j] = j;
  }

  for (let i = 1; i < word1.length + 1; i += 1) {
    for (let j = 1; j < word2.length + 1; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        dpTable[i][j] = dpTable[i - 1][j - 1];
      } else {
        dpTable[i][j] = Math.min(dpTable[i - 1][j], dpTable[i][j - 1], dpTable[i - 1][j - 1]) + 1;
      }
    }
  }

  return dpTable[word1.length][word2.length];
}
