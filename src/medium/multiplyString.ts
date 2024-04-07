/**
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 *
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 *
 *
 * Example 1:
 *
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * Example 2:
 *
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 *
 * Constraints:
 *
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 */

function createAdditionMap(): Map<string, [string, string]> {
  const map: Map<string, [string, string]> = new Map();

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const key = `${i}+${j}`;
      map.set(key, [String(Math.floor((i + j) / 10)), String((i + j) % 10)]);
    }
  }

  return map;
}

function createMultiplicationMap(): Map<string, [string, string]> {
  const map: Map<string, [string, string]> = new Map();

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const key = `${i}*${j}`;
      map.set(key, [String(Math.floor((i * j) / 10)), String((i * j) % 10)]);
    }
  }

  return map;
}

const additionMap = createAdditionMap();
const multiplicationMap = createMultiplicationMap();

function addDigits(d1: string, d2: string): [string, string] {
  const answer = additionMap.get(`${d1}+${d2}`);
  if (!answer) throw new Error(`${d1} or ${d2} is not a valid digit`);
  return answer;
}

function multiplyDigits(d1: string, d2: string): [string, string] {
  const answer = multiplicationMap.get(`${d1}*${d2}`);
  if (!answer) throw new Error(`${d1} or ${d2} is not a valid digit`);
  return answer;
}

export function addString(num1: string, num2: string) {
  const reversedNum1 = num1.split('').reverse().join('');
  const reversedNum2 = num2.split('').reverse().join('');

  let answer: string = '';
  let carry: string = '0';

  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    const [tempCarry1, tempDigit] = addDigits(getNthDigit(i, reversedNum1), getNthDigit(i, reversedNum2));
    const [tempCarry2, newDigit] = addDigits(carry, tempDigit);

    if (tempCarry1 === '1' || tempCarry2 === '1') {
      carry = '1';
    } else {
      carry = '0';
    }

    answer = `${newDigit}${answer}`;
  }

  if (carry === '1') {
    answer = `1${answer}`;
  }

  return answer;
}

export function multiply(num1: string, num2: string): string {
  const reversedNum1 = num1.split('').reverse().join('');
  const reversedNum2 = num2.split('').reverse().join('');

  const subMultResult: string[] = [];

  for (let i = 0; i < num1.length; i++) {
    const d = getNthDigit(i, reversedNum1);
    let ithDigitMultResult: string = '';
    let carry: string = '0';
    for (let j = 0; j < num2.length; j++) {
      const [subCarry, digit] = multiplyDigits(d, getNthDigit(j, reversedNum2));
      const [singleDigitCarry, resultDigit] = addDigits(digit, carry);
      ithDigitMultResult = `${resultDigit}${ithDigitMultResult}`;
      [, carry] = addDigits(subCarry, singleDigitCarry);
    }
    if (carry !== '0') {
      ithDigitMultResult = `${carry}${ithDigitMultResult}`;
    }
    for (let j = 0; j < i; j++) {
      ithDigitMultResult = `${ithDigitMultResult}0`;
    }

    subMultResult.push(ithDigitMultResult);
  }

  return removeLeading0s(subMultResult.reduce((acc, curr) => addString(acc, curr), '0'));
}

function getNthDigit(n: number, reversedString: string) {
  if (n < reversedString.length) {
    return reversedString[n];
  }
  return '0';
}

function removeLeading0s(num: string): string {
  const reversedDidigts = num.split('').reverse();

  while (reversedDidigts.length > 1) {
    if (reversedDidigts[reversedDidigts.length - 1] === '0') {
      reversedDidigts.pop();
    } else {
      break;
    }
  }

  return reversedDidigts.reverse().join('');
}
