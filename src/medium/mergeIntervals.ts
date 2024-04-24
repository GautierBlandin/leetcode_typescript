export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    // a[0] === b[0]
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  });

  const merged: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i += 1) {
    const interval = intervals[i];
    if (interval[0] <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(interval[1], merged[merged.length - 1][1]);
    } else {
      merged.push(interval);
    }
  }

  return merged;
}
