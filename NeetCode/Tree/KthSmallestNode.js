/**
 * Q Kth Smallest Integer in BST
 * Given the root of a binary search tree, and an integer k, 
 * return the kth smallest value (1-indexed) in the tree.
 * 
 * A binary search tree satisfies the following constraints:
 * The left subtree of every node contains only nodes with keys 
 * less than the node's key.
 * 
 * The right subtree of every node contains only nodes with keys 
 * greater than the node's key.
 * 
 * Both the left and right subtrees are also binary search trees
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
   * @param {number} k
   * @return {number}
   */
  kthSmallest(root, k) {
    let arr = []
    const traverse = (node) => {
      if(node) {
        traverse(node.left)
        arr.push(node.val)
        traverse(node.right)
      }
    }
    traverse(root)
    return arr[k - 1]
  }

  kthSmallest_optimized(root, k) {
    const count = 0
    let result = null
    const traverse = (node) => {
      if(!node || result !== null) return

      traverse(node.left)
      count += 1
      if(count === k) {
        result = node.val
        return
      }

      traverse(node.right)
    }
    traverse(root)
    return result
  }
}