import { ListNode } from '../common/ListNode';

export function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null;

  let newHead: ListNode | null = null;
  if (head.val < x) newHead = head;

  let prev: ListNode | null = null;
  let cur: ListNode = head;

  // First part of the algorithm: skip until we reach the first interesting value
  while (cur.val < x) {
    // Terminate early if the whole linked list has been skipped
    if (!cur.next) {
      return head;
    }

    prev = cur;
    cur = cur.next;
  }

  // At this point, cur.val is guaranteed to be x or greater and should become the left-most value
  // of the right partition

  const rightPartitionLeft: ListNode = cur;
  let rightPartitionRight: ListNode = cur;

  while (rightPartitionRight.next) {
    const next = rightPartitionRight.next;
    // Case 1: The next node is >= x and should be part of right partition
    if (next.val >= x) {
      rightPartitionRight = rightPartitionRight.next;
    } else {
      // Case 2: The next node is < x and should be moved in front of the right partition
      // If we haven't determined a newHead yet (the first element to be < x), set it.
      if (!newHead) {
        newHead = next;
      }

      rightPartitionRight.next = next.next;
      next.next = rightPartitionLeft;

      if (prev) {
        prev.next = next;
      }
      prev = next;
    }
  }

  if (newHead) return newHead;
  // There were no nodes smaller than x, the linked list is left intact and we directly return head.
  return head;
}
