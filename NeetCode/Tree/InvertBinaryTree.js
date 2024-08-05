/**
 * Q - Invert Binary Tree
 * You are given the root of a binary tree root. 
 * Invert the binary tree and return its root.
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
   * @return {TreeNode}
   */
  invertTree(root) {
    let queue = []
    let current = root
    if(current) {
      queue.push(current)
      while(queue.length > 0) {
        let present = queue.shift()
        let temp = present.right || null

        if(present.left) {
          present.right = present.left
          queue.push(present.left)
        }

        if(temp) {
          present.left = temp
          queue.push(temp)
        } else {
          present.left = null
        }
      }
    }
  }
}