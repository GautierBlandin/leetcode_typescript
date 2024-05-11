export function minWindow(s: string, t: string): string {
  const frequencyMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let minLeft = 0;
  let minRight = 0;
  let currentCount = 0;
  let minCount = Infinity;

  const targetFrequencyMap = computeTargetFrequencyMap(t);

  while (right < s.length) {
    while (right < s.length && !frequencyMapContainsTargetFrequencyMap(frequencyMap, targetFrequencyMap)) {
      incrementFrequencyMap(s[right], frequencyMap);
      currentCount += 1;
      right += 1;
    }

    while (left < right && frequencyMapContainsTargetFrequencyMap(frequencyMap, targetFrequencyMap)) {
      if (currentCount < minCount) {
        minCount = currentCount;
        minLeft = left;
        minRight = right;
      }

      decrementFrequencyMap(s[left], frequencyMap);
      currentCount -= 1;
      left += 1;
    }
  }

  return s.substring(minLeft, minRight);
}

function computeTargetFrequencyMap(t: string): Map<string, number> {
  const targetFrequencyMap = new Map<string, number>();

  for (let i = 0; i < t.length; i += 1) {
    incrementFrequencyMap(t[i], targetFrequencyMap);
  }

  return targetFrequencyMap;
}

function frequencyMapContainsTargetFrequencyMap(frequencyMap: Map<string, number>, targetFrequencyMap: Map<string, number>) {
  const targetKeys = targetFrequencyMap.keys();

  for (const key of targetKeys) {
    if (frequencyMap.get(key) === undefined) return false;
    if (frequencyMap.get(key)! < targetFrequencyMap.get(key)!) return false;
  }

  return true;
}

function incrementFrequencyMap(c: string, frequencyMap: Map<string, number>) {
  if (frequencyMap.has(c)) {
    frequencyMap.set(c, frequencyMap.get(c)! + 1);
  } else {
    frequencyMap.set(c, 1);
  }
}

function decrementFrequencyMap(c: string, frequencyMap: Map<string, number>) {
  frequencyMap.set(c, frequencyMap.get(c)! - 1);
  if (frequencyMap.get(c) === 0) {
    frequencyMap.delete(c);
  }
}
