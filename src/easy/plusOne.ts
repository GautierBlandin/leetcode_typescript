export function plusOne(digits: number[]): number[] {
  let i = digits.length - 1;
  while (i >= 0) {
    digits[i] = (digits[i] + 1) % 10;
    if (digits[i] === 0) {
      i -= 1;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
}
