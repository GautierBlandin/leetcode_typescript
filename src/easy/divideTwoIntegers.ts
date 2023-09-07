type Integer = number;

export function divideTwoIntegers(dividend: Integer, divisor: Integer) {
  // Deal with the edge case where the quotient can be out of bound
  if (dividend === 0) return 0;
  if (dividend === -(2 ** 31) && divisor === -1) return 2 ** 31 - 1;

  const doubleArray: Integer[] = [];
  const absDividend = abs(dividend);
  let current = abs(divisor);

  while (absDividend >= current && current <= 2 ** 31) {
    doubleArray.push(current);
    current = double(current);
  }

  let k = doubleArray.length - 1;
  let remaining = absDividend;
  let quotient = 0;

  while (k >= 0) {
    if (doubleArray[k] <= remaining) {
      remaining -= doubleArray[k];
      quotient += 2 ** k;
    }
    k -= 1;
  }

  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) return quotient;
  return -quotient;
}

function double(x: Integer): Integer {
  return x + x;
}

function abs(x: Integer): Integer {
  if (x < 0) return -x;
  return x;
}
