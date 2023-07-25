import { swapPairs } from './swapNodesInPairs';
import { ListNode } from '../common/ListNode';

describe('swapPairs', () => {
  // edge cases
  it('should handle an empty list', () => {
    expect(swapPairs(null)).toEqual(null);
  });

  it('should handle a list with a single element', () => {
    const head = new ListNode(1);
    const newHead = swapPairs(head);
    expect(newHead).toEqual(head);
  });

  // normal cases
  it('should handle a list with four elements', () => {
    const head = ListNode.fromArray([1, 2, 3, 4]);
    const newHead = swapPairs(head);
    expect(ListNode.toArray(newHead)).toEqual([2, 1, 4, 3]);
  });

  it('should handle a list with five elements', () => {
    const head = ListNode.fromArray([1, 2, 3, 4, 5]);
    const newHead = swapPairs(head);
    expect(ListNode.toArray(newHead)).toEqual([2, 1, 4, 3, 5]);
  });
});
