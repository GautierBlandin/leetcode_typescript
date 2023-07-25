import { NodeSwapper } from './swapNodesInPairs';
import { ListNode } from '../common/ListNode';

describe('swapNodesInPairs', () => {
  it('should handle an empty list', () => {
    const swapper = new NodeSwapper();
    expect(swapper.swapPairs(null)).toEqual(null);
  });

  it('should handle a list with one node', () => {
    const swapper = new NodeSwapper();
    expect(swapper.swapPairs({ val: 1, next: null })).toEqual({ val: 1, next: null });
  });

  it('should handle a list with two nodes', () => {
    testList([1, 2], [2, 1]);
  });

  it('should handle a list with three nodes', () => {
    testList([1, 2, 3], [2, 1, 3]);
  });

  it('should handle a list with four nodes', () => {
    testList([1, 2, 3, 4], [2, 1, 4, 3]);
  });

  it('should handle a list with five nodes', () => {
    testList([1, 2, 3, 4, 5], [2, 1, 4, 3, 5]);
  });
});

function testList(input: number[], expected: number[]) {
  const head = ListNode.fromArray(input);
  const swapper = new NodeSwapper();
  const newHead = swapper.swapPairs(head);
  expect(ListNode.toArray(newHead)).toEqual(expected);
}
