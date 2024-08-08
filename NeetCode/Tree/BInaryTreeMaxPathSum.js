/**
 * Q Binary Tree Maximum Path Sum
 * Given the root of a non-empty binary tree, return the 
 * maximum path sum of any non-empty path.
 * 
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes 
 * has an edge connecting them. A node can not appear in the sequence more than once.
 * 
 * The path does not necessarily need to include the root.
The path sum of a path is the sum of the node's values in the path.
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
  maxPathSum(root) {
    if(!root || root === null) return 0

    let maxValue = -Infinity

    const traverse = (node) => {
      if(!node) return 0

      let nodeLeft = Math.max(traverse(node.left), 0)
      let nodeRight = Math.max(traverse(node.right), 0)

      maxValue = Math.max(nodeLeft + nodeRight + node.val, maxValue)

      return Math.max(nodeLeft, nodeRight) + node.val
    }

    traverse(root)

    return maxValue
  }
}
