/**
 * Q Valid Binary Search Tree
 * Given the root of a binary tree, return true if it is 
 * a valid binary search tree, otherwise return false.
 * 
 * A valid binary search tree satisfies the following constraints:
 * The left subtree of every node contains only nodes with keys 
 * less than the node's key.
 * The right subtree of every node contains only nodes with keys 
 * greater than the node's key.
 * Both the left and right subtrees are also binary search trees.
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
   * @return {boolean}
   */
  isValidBST(root) {
    let queue = [root]

    while(queue.length > 0) {
      let curr = queue.shift()
      if(curr.left) {
        if(curr.left.val > curr.val) return false
        if(curr.left.val > root.val) return false
        if(curr.left.val < curr.val && curr.left.val < root.val) return false
        queue.push(curr.left)
      }

      if(curr.right) {
        if(curr.right.val < curr.val) return false
        if(curr.right.val < root.val) return false
        if(curr.right.val > curr.val && curr.right.val > root.val) return false
        queue.push(curr.right)
      }
    }
    return true
  }

  isValidBST_correct(root) {
    const traverse = (node, lower, upper) => {
      if(!node) return true

      if(node.val <= lower || node.val >= upper) return false

      return traverse(node.left, lower, node.val) && traverse(node.right, node.val, upper)
    }

    return traverse(root, -Infinity, Infinity)
  }
}
