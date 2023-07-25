export class ListNode {
  public val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }

  public static fromArray(arr: number[]): ListNode | null {
    if (arr.length === 0) {
      return null;
    }
    const preStart = new ListNode(-1);
    let node = preStart;
    for (const element of arr) {
      node.next = new ListNode(element);
      node = node.next;
    }
    return preStart.next;
  }

  public static toArray(head: ListNode | null): number[] {
    const arr: number[] = [];
    let node = head;
    while (node !== null) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}
