import { TreeNode } from '../common/TreeNode';

function isValidBST(root: TreeNode | null): boolean {
  const content: number[] = [];

  function process(node: TreeNode | null) {
    if (!node) return;
    process(node.left);
    content.push(node.val);
    process(node.right);
  }

  process(root);

  for (let i = 0; i < content.length - 1; i += 1) {
    if (content[i] >= content[i + 1]) return false;
  }

  return true;
}
