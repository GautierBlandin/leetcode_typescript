import { KGroupReverser, reverseKGroup } from './reverseNodesInKGroup';
import { ListNode } from '../common/ListNode';

describe('reverseKGroup', () => {
  it('should handle null head', () => {
    expect(reverseKGroup(null, 1)).toEqual(null);
  });

  it('should handle one element list', () => {
    const head = new ListNode(1);
    const newHead = reverseKGroup(head, 2);
    expect(newHead).toEqual(head);
  });

  it('should handle k = 1', () => {
    reverseKGroupTestHelper({
      inputList: [1, 2, 3, 4],
      k: 1,
      expected: [1, 2, 3, 4],
    });
  });

  it('should handle k = 2', () => {
    reverseKGroupTestHelper({
      inputList: [1, 2, 3, 4, 5],
      k: 2,
      expected: [2, 1, 4, 3, 5],
    });
  });

  it('should handle k = 3', () => {
    reverseKGroupTestHelper({
      inputList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      k: 3,
      expected: [3, 2, 1, 6, 5, 4, 9, 8, 7, 12, 11, 10, 13, 14],
    });
  });

  it('should handle k = 4', () => {
    reverseKGroupTestHelper({
      inputList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      k: 4,
      expected: [4, 3, 2, 1, 8, 7, 6, 5, 9, 10, 11],
    });
  });
});

describe('reverseRecursively', () => {
  it('should reverse recursively', () => {
    const reverser = new KGroupReverser();
    const head = ListNode.fromArray([1, 2, 3, 4]) as ListNode;
    const result = reverser.reverse(head, 4);

    expect(result.canReverse).toBe(true);
    if (!result.canReverse) return;
    expect(ListNode.toArray(result.lastNode)).toEqual([4, 3, 2, 1]);
  });

  it('should not reverse recursively when k is too big', () => {
    const reverser = new KGroupReverser();
    const head = ListNode.fromArray([1, 2, 3, 4]) as ListNode;
    const { canReverse } = reverser.reverse(head, 5);
    expect(canReverse).toBe(false);
  });
});

function reverseKGroupTestHelper({ inputList, k, expected }: { inputList: number[], k: number, expected: number[] }) {
  const head = ListNode.fromArray(inputList);
  const newHead = reverseKGroup(head, k);
  expect(ListNode.toArray(newHead)).toEqual(expected);
}
