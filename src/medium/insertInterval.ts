export function insert(intervals: number[][], newInterval: number[]): number[][] {
  let i = 0;
  const result: number[][] = [];

  // continue until we reach a point where the end of the ith interval is >= start of new interval
  while (i < intervals.length && newInterval[0] > intervals[i][1]) {
    result.push(intervals[i]);
    i += 1;
  }

  // either: we've reached the end, or newIntervalStart <= currentIntervalEnd
  if (i === intervals.length) {
    result.push(newInterval);
    return result;
  }

  const insertIntervalStart = Math.min(newInterval[0], intervals[i][0]);

  // as long as the newInterval's end is greater than the existing interval's end, we can
  // skip the existing interval as it should get merged in the new interval.
  while (i < intervals.length && newInterval[1] >= intervals[i][1]) {
    i += 1;
  }

  // if we've reached the end, simply push the new interval
  if (i === intervals.length) {
    result.push([insertIntervalStart, newInterval[1]]);
    return result;
  }

  // once the current interval's end is greater that newInterval end, there are two cases
  // either the current interval's start is smaller that new interval end, and it gets merged too into
  // a big interval. If the current interval's start is greater that new interval end,
  // we add the new merged interval and the current (non-overlapping) interval
  if (newInterval[1] >= intervals[i][0]) {
    result.push([insertIntervalStart, intervals[i][1]]);
  } else {
    result.push([insertIntervalStart, newInterval[1]]);
    result.push(intervals[i]);
  }

  i += 1;

  // append the remaining existing intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
    i += 1;
  }

  return result;
}
