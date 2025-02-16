import { ListNode } from '../common/ListNode';

export function partition(head: ListNode | null, x: number): ListNode | null {
  const leftDummy = new ListNode(0);
  const rightDummy = new ListNode(0);
  let leftTail: ListNode = leftDummy;
  let rightTail: ListNode = rightDummy;

  let cur = head;

  while (cur) {
    if (cur.val < x) {
      leftTail.next = cur;
      leftTail = cur;
    } else {
      rightTail.next = cur;
      rightTail = cur;
    }
    cur = cur.next;
  }

  leftTail.next = rightDummy.next;
  rightTail.next = null;

  return leftDummy.next;
}
