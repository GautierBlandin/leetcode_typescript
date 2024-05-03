export function addBinary(a: string, b: string): string {
  const resultArray: number[] = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 && j >= 0) {
    const singleDigitResult = parseInt(a[i], 10) + parseInt(b[j], 10) + carry;
    i -= 1;
    j -= 1;

    carry = singleDigitResult > 1 ? 1 : 0;
    resultArray.push(singleDigitResult % 2);
  }

  if (a.length > b.length) {
    while (i >= 0) {
      const singleDigitResult = parseInt(a[i], 10) + carry;
      i -= 1;

      carry = singleDigitResult > 1 ? 1 : 0;
      resultArray.push(singleDigitResult % 2);
    }
  }

  if (b.length > a.length) {
    while (j >= 0) {
      const singleDigitResult = parseInt(b[j], 10) + carry;
      j -= 1;

      carry = singleDigitResult > 1 ? 1 : 0;
      resultArray.push(singleDigitResult % 2);
    }
  }

  if (carry === 1) {
    resultArray.push(1);
  }

  return resultArray.reverse().join('');
}
