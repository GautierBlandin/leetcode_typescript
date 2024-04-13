export function isMatchRec(s: string, p: string): boolean {
  const matchMap = new Map<string, boolean>();

  return isMatchRecursive(s, p, 0, 0, matchMap);
}

function isMatchRecursive(s: string, p: string, i: number, j: number, matchMap: Map<string, boolean>): boolean {
  if (matchMap.get(`${i},${j}`) !== undefined) {
    return matchMap.get(`${i},${j}`) as boolean;
  }

  if (i === s.length && j === p.length) {
    return memoize(true, i, j, matchMap);
  }

  if (j === p.length) return memoize(false, i, j, matchMap);

  if (i === s.length) {
    if (p[j] !== '*') return memoize(false, i, j, matchMap);
    return memoize(isMatchRecursive(s, p, i, j + 1, matchMap), i, j, matchMap);
  }

  if (p[j] === '*') {
    return memoize(
      isMatchRecursive(s, p, i + 1, j, matchMap)
      || isMatchRecursive(s, p, i, j + 1, matchMap),
      i,
      j,
      matchMap,
    );
  }

  if (!matchSingleCharacter(s[i], p[j])) return memoize(false, i, j, matchMap);

  return memoize(
    isMatchRecursive(s, p, i + 1, j + 1, matchMap),
    i,
    j,
    matchMap,
  );
}

function memoize(result: boolean, i: number, j: number, matchMap: Map<string, boolean>) {
  matchMap.set(`${i},${j}`, result);
  return result;
}

export function isMatch(s: string, p: string): boolean {
  const dpTable: (boolean | undefined)[][] = new Array(s.length + 1).fill(undefined).map(() => new Array(p.length + 1).fill(undefined));

  // Represent empty string with empty pattern
  dpTable[0][0] = true;

  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j <= p.length; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      // i >= 1 || j >= 1
      if (j === 0) {
        dpTable[i][j] = false;
        continue;
      }

      // j >= 1
      if (i === 0) {
        if (p[j - 1] !== '*') {
          dpTable[i][j] = false;
          continue;
        } else {
          dpTable[i][j] = dpTable[i][j - 1];
          continue;
        }
      }

      // j >= 1 && i >= 1
      if (p[j - 1] !== '*') {
        dpTable[i][j] = matchSingleCharacter(s[i - 1], p[j - 1]) && dpTable[i - 1][j - 1];
        continue;
      }

      // p[j - 1] === '*'
      dpTable[i][j] = dpTable[i - 1][j] || dpTable[i][j - 1];
    }
  }

  const result = dpTable[s.length][p.length];
  if (result === undefined) throw new Error('bug while iterating');
  return result;
}

function matchSingleCharacter(c: string, pc: string): boolean {
  return c === pc || pc === '?';
}

export function isMatchGreedy(s: string, p: string): boolean {
  let sIndex = 0;
  let pIndex = 0;
  let starIndex = -1;
  let matchIndex = 0;

  while (sIndex < s.length) {
    if (pIndex < p.length && (p[pIndex] === '?' || p[pIndex] === s[sIndex])) {
      sIndex++;
      pIndex++;
    } else if (pIndex < p.length && p[pIndex] === '*') {
      starIndex = pIndex;
      matchIndex = sIndex;
      pIndex++;
    } else if (starIndex !== -1) {
      pIndex = starIndex + 1;
      matchIndex++;
      sIndex = matchIndex;
    } else {
      return false;
    }
  }

  while (pIndex < p.length && p[pIndex] === '*') {
    pIndex++;
  }

  return pIndex === p.length;
}
