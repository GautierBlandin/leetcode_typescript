import { ListNode } from '../common/ListNode';

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null) {
    return head;
  }

  const length = computeLength(head);
  const remainK = k % length;

  if (remainK === 0) {
    return head;
  }

  const newHead = getKthElement(head, length - remainK);
  const newTail = getKthElement(head, length - remainK - 1);
  const lastElement = getKthElement(head, length - 1);

  newTail.next = null;
  lastElement.next = head;
  return newHead;
}

export function computeLength(head: ListNode | null): number {
  if (head === null) return 0;
  return computeLength(head.next) + 1;
}

export function getKthElement(head: ListNode, k: number): ListNode {
  if (k === 0) {
    return head;
  }

  if (head.next === null) {
    throw new Error('List does not have enough elements');
  }

  return getKthElement(head.next, k - 1);
}
