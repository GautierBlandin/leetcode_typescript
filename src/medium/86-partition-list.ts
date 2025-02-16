import { ListNode } from '../common/ListNode';

export function partition(head: ListNode | null, x: number): ListNode | null {
  // New implementation idea:
  // Create a left linked list and a right linked list, merging them at the end

  if (!head) return null;

  let leftPartitionStart: ListNode | null = null;
  let leftPartitionEnd: ListNode | null = null;
  let rightPartitionStart: ListNode | null = null;
  let rightPartitionEnd: ListNode | null = null;

  let cur: ListNode | null = head;

  while (cur) {
    if (cur.val < x) {
      if (!leftPartitionStart || !leftPartitionEnd) {
        leftPartitionStart = cur;
        leftPartitionEnd = cur;
      } else {
        leftPartitionEnd.next = cur;
        leftPartitionEnd = cur;
      }
    } else if (!rightPartitionStart || !rightPartitionEnd) {
      rightPartitionStart = cur;
      rightPartitionEnd = cur;
    } else {
      rightPartitionEnd.next = cur;
      rightPartitionEnd = cur;
    }
    cur = cur.next;
  }

  if (leftPartitionEnd) leftPartitionEnd.next = rightPartitionStart;
  if (rightPartitionEnd) rightPartitionEnd.next = null;
  return leftPartitionStart ?? rightPartitionStart;
}
