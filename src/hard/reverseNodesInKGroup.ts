/* eslint-disable no-param-reassign */
import { ListNode } from '../common/ListNode';

export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const reverser = new KGroupReverser();
  return reverser.reverseKGroup(head, k);
}

type RecursiveReverseReturn = SuccessfulRecursiveReturn | FailedRecursiveReturn;
type SuccessfulRecursiveReturn = { canReverse: true, lastNode: ListNode, afterLastNode: ListNode | null };
type FailedRecursiveReturn = { canReverse: false };

export class KGroupReverser {
  public reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head === null) return head;
    if (k === 1) return head;

    const start = { next: head } as ListNode;

    let prev = start;
    let current = head;
    while (true) {
      const recursiveReturn = this.reverse(current, k);
      if (!recursiveReturn.canReverse) break;

      prev.next = recursiveReturn.lastNode;

      prev = current;

      if (!recursiveReturn.afterLastNode) break;
      current = recursiveReturn.afterLastNode;
    }

    return start.next;
  }

  public reverse(current: ListNode, k: number): RecursiveReverseReturn {
    const recursiveReturn = this.reverseRecursively(current, k);

    if (recursiveReturn.canReverse) {
      current.next = recursiveReturn.afterLastNode;
    }

    return recursiveReturn;
  }

  private reverseRecursively(current: ListNode, k: number): RecursiveReverseReturn {
    if (!current.next) return { canReverse: false };

    if (k === 2) {
      const afterLastNode = current.next.next;
      current.next.next = current;
      return { canReverse: true, lastNode: current.next, afterLastNode };
    }

    const recursiveReturn = this.reverse(current.next, k - 1);
    if (recursiveReturn.canReverse) {
      current.next!.next = current;
      return recursiveReturn;
    }
    return { canReverse: false };
  }
}
