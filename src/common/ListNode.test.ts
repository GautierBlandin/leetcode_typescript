import { ListNode } from './ListNode';

describe('ListNode', () => {
  describe('fromArray', () => {
    it('should handle an empty array', () => {
      expect(ListNode.fromArray([])).toEqual(null);
    });

    it('should handle an array with one element', () => {
      expect(ListNode.fromArray([1])).toEqual({ val: 1, next: null });
    });

    it('should handle an array with two elements', () => {
      expect(ListNode.fromArray([1, 2])).toEqual({ val: 1, next: { val: 2, next: null } });
    });
  });

  describe('toArray', () => {
    it('should handle an empty list', () => {
      expect(ListNode.toArray(null)).toEqual([]);
    });

    it('should handle a list with one element', () => {
      expect(ListNode.toArray({ val: 1, next: null })).toEqual([1]);
    });

    it('should handle a list with two elements', () => {
      expect(ListNode.toArray({ val: 1, next: { val: 2, next: null } })).toEqual([1, 2]);
    });
  });
});
