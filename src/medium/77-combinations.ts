export function combine(n: number, k: number): number[][] {
  const pointers = new Array(k).fill(undefined).map((_, index) => index + 1);
  const result: number[][] = [[...pointers]];

  while (true) {
    let updated = false;

    for (let j = 0; j < k; j += 1) {
      if (pointers[k - 1 - j] < n - j) {
        updated = true;
        pointers[k - 1 - j] += 1;

        for (let i = 1; i < j + 1; i += 1) {
          pointers[k - 1 - j + i] = pointers[k - 1 - j] + i;
        }

        break;
      }
    }

    if (updated) {
      result.push([...pointers]);
    } else {
      break;
    }
  }

  return result;
}
