/**
 * Q: Lowest Common Ancestor
 * Given a binary search tree (BST) where all node values are unique, 
 * and two nodes from the tree p and q, return the lowest common ancestor 
 * (LCA) of the two nodes.
 * 
 * The lowest common ancestor between two nodes p and q is the lowest node in 
 * a tree T such that both p and q as descendants. The ancestor is allowed to 
 * be a descendant of itself.
 * 
 * Definition for a binary tree node
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
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {TreeNode}
   */
  lowestCommonAncestor(root, p, q) {
    let traverse = (node) => {
      if(node) {

        if ((p.val <= node.val && q.val >= node.val) 
          || (p.val >= node.val && q.val <= node.val)) {
          return node
        } else if(p.val < node.val && q.val < node.val) {
          return traverse(node.left)
        } else if(p.val > node.val && q.val > node.val) {
          return traverse(node.right)
        }
      }
    }

    return traverse(root)
  }
}
