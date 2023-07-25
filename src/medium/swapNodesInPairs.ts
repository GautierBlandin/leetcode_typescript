import { ListNode } from '../common/ListNode';

export function swapPairs(head: ListNode | null): ListNode | null {
  const swapper = new NodeSwapper();
  return swapper.swapPairs(head);
}

export class NodeSwapper {
  public swapPairs(head: ListNode | null): ListNode | null {
    if (head === null) return head;

    const start = { next: head } as ListNode;
    let current = start;

    while (current.next && current.next.next) {
      const left = current;
      const mid = current.next;
      const right = current.next.next;

      left.next = right;
      mid.next = right.next;
      right.next = mid;

      current = mid;
    }

    return start.next;
  }
}
