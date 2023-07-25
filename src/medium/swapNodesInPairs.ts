import { ListNode } from '../common/ListNode';

export class NodeSwapper {
  public swapPairs(head: ListNode | null): ListNode | null {
    if (head === null) {
      return null;
    }
    const start = new ListNode(-1, head);
    let current = start;

    while (current.next && current.next.next) {
      const prev = current;
      const mid = current.next;
      // eslint-disable-next-line
      const next = current.next.next;
      const nextNext = current.next.next.next;

      prev.next = next;
      next.next = mid;
      mid.next = nextNext;

      current = mid;
    }

    return start.next;
  }
}
