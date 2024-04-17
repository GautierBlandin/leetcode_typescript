export function groupAnagrams(strs: string[]): string[][] {
  const map: Map<number, string[]> = new Map();
  for (let i = 0; i < strs.length; i++) {
    const s = strs[i];
    const h = hash(s);
    if (map.has(h)) {
      map.set(h, [...map.get(h)!, s]);
    } else {
      map.set(h, [s]);
    }
  }
  return [...map.values()];
}

function pow(x: number, n: number, mod: number): number {
  if (n === 0) return 1;
  let result = x;
  for (let i = 1; i <= n; i++) {
    result = (result * x) % mod;
  }
  return result;
}

function letterToPosition(c: string) {
  return c.charCodeAt(0) - 'a'.charCodeAt(0);
}

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h += pow(523, letterToPosition(s[i]), 10000000);
  }
  return h;
}
