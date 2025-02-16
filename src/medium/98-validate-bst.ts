import { TreeNode } from '../common/TreeNode';

function isValidBST(root: TreeNode | null): boolean {
  let valid = true;

  function process(node: TreeNode | null, upperBound: number, lowerBound: number) {
    if (!node) return;

    if (node.val >= upperBound) {
      valid = false;
      return;
    }

    if (node.val <= lowerBound) {
      valid = false;
      return;
    }

    process(node.left, Math.min(upperBound, node.val), lowerBound);
    process(node.right, upperBound, Math.max(lowerBound, node.val));
  }

  process(root, Infinity, -Infinity);

  return valid;
}
