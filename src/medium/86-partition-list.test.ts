import { ListNode } from '../common/ListNode';

function partition(head: ListNode | null, x: number): ListNode | null {}

describe('partition', () => {
  it('works on example 1', () => {
    const head = ListNode.fromArray([1, 4, 3, 2, 5, 2]);

    expect(ListNode.toArray(partition(head, 3))).toEqual([1, 2, 2, 4, 3, 5]);
  });

  it('works on the empty list', () => {
    const head = ListNode.fromArray([]);

    expect(ListNode.toArray(partition(head, 3))).toEqual([]);
  });

  it('works on a list with a single element', () => {
    const head = ListNode.fromArray([1]);

    expect(ListNode.toArray(partition(head, 3))).toEqual([1]);
  });

  it('works on a list with a single greater element', () => {
    const head = ListNode.fromArray([4]);

    expect(ListNode.toArray(partition(head, 3))).toEqual([4]);
  });

  it('works on a list with two already ordered elements', () => {
    const head = ListNode.fromArray([1, 3]);

    expect(ListNode.toArray(partition(head, 3))).toEqual([1, 3]);
  });

  it('works on a list with two elements that need to be swapped', () => {
    const head = ListNode.fromArray([3, 1]);

    expect(ListNode.toArray(partition(head, 3))).toEqual([1, 3]);
  });

  it('works on a list with three elements', () => {
    const head = ListNode.fromArray([3, 2, 1]);

    expect(ListNode.toArray(partition(head, 3))).toEqual([2, 1, 3]);
  });
});
