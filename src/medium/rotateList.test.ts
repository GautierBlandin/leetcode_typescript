import { ListNode } from '../common/ListNode';
import { computeLength, getKthElement, rotateRight } from './rotateList';

describe('rotateRight', () => {
  it('should rotate example 1.1', () => {
    executeTest({
      input: {
        array: [1, 2, 3, 4, 5],
        k: 1,
      },
      expected: [5, 1, 2, 3, 4],
    });
  });

  it('should rotate example 1.2', () => {
    executeTest({
      input: {
        array: [1, 2, 3, 4, 5],
        k: 2,
      },
      expected: [4, 5, 1, 2, 3],
    });
  });

  it('should rotate example 2.1', () => {
    executeTest({
      input: {
        array: [0, 1, 2],
        k: 1,
      },
      expected: [2, 0, 1],
    });
  });

  it('should rotate example 2.2', () => {
    executeTest({
      input: {
        array: [0, 1, 2],
        k: 2,
      },
      expected: [1, 2, 0],
    });
  });

  it('should rotate example 2.3', () => {
    executeTest({
      input: {
        array: [0, 1, 2],
        k: 3,
      },
      expected: [0, 1, 2],
    });
  });

  it('should rotate example 2.4', () => {
    executeTest({
      input: {
        array: [0, 1, 2],
        k: 4,
      },
      expected: [2, 0, 1],
    });
  });

  it('should rotate empty list', () => {
    executeTest({
      input: {
        array: [],
        k: 4,
      },
      expected: [],
    });
  });

  it('should properly do null-rotation', () => {
    executeTest({
      input: {
        array: [1, 2, 3],
        k: 0,
      },
      expected: [1, 2, 3],
    });
  });
});

describe('compute length', () => {
  it('should return 0 for null list', () => {
    const list = ListNode.fromArray([]);
    expect(computeLength(list)).toEqual(0);
  });

  it('should return the length of a list', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    expect(computeLength(list)).toEqual(5);
  });
});

describe('gethKthElement', () => {
  it('should get the 0th element', () => {
    const head = ListNode.fromArray([1, 2, 3, 4, 5]) as ListNode;
    expect(getKthElement(head, 0).val).toEqual(1);
  });

  it('should get the 1rst element', () => {
    const head = ListNode.fromArray([1, 2, 3, 4, 5]) as ListNode;
    expect(getKthElement(head, 1).val).toEqual(2);
  });

  it('should get the last element', () => {
    const head = ListNode.fromArray([1, 2, 3, 4, 5]) as ListNode;
    expect(getKthElement(head, 4).val).toEqual(5);
  });
});

type TestArgs = {
  input: {
    array: number[],
    k: number
  },
  expected: number[],
};

function executeTest({ input, expected }: TestArgs) {
  const head = ListNode.fromArray(input.array);
  const outHead = rotateRight(head, input.k);
  expect(ListNode.toArray(outHead)).toEqual(expected);
}
