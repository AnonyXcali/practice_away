/**
 * Q: Calculate depth of binary tree.
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  maxDepth(root) {
    let max = 1

    function postOrder(node, count) {
      if(node) {
        max = Math.max(max, count + 1)
        postOrder(node.left, count)
        postOrder(node.right, count)
      }
    }

    postOrder(root, 0)

    return max
  }

  maxDepth_gpt(root) {
    if (root === null) {
      return 0;
    }

    let max = 0;

    function postOrder(node, depth) {
      if (node === null) {
        return;
      }
      
      // Update the maximum depth
      max = Math.max(max, depth);

      // Recur for left and right subtrees with incremented depth
      postOrder(node.left, depth + 1);
      postOrder(node.right, depth + 1);
    }

    postOrder(root, 1);

    return max;
  }
}
