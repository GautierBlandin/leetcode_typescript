export function isMatch(s: string, p: string): boolean {
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

function matchSingleCharacter(c: string, pc: string): boolean {
  return c === pc || pc === '?';
}
