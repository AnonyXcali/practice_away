/**
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
  isBalanced(root) {
    if(!root) return true // an empty tree is balanced.

    let queue = [root]
    let flag = true //assuming the given tree is balanced binary tree
    while(queue.length > 0 && flag) {
      let curr = queue.shift()
      let leftDepth = 0
      let rightDepth = 0
      if(curr.left) {
        queue.push(curr.left)
        leftDepth = this.depth(curr.left) // 1
      }

      if(curr.right) {
        queue.push(curr.right)
        rightDepth = this.depth(curr.right) //2
      }

      flag = Math.abs(leftDepth - rightDepth) <= 1
    }

    return flag
  }

  depth(node) {
    let maxDepth = 0
    
    function calculate(node, count) {
      if(node) {
        maxDepth = Math.max(maxDepth, count)
        calculate(node.left, count + 1)
        calculate(node.right, count + 1)
      }

      return null
    }

    calculate(node, 1)

    return maxDepth
  }

  isBalanced_optimized(node) {
    const checkBalance = (node) => {
      if(!node) return 0

      let leftCheck = checkBalance(node.left)
      if(leftCheck === -1) return -1

      let rightCheck = checkBalance(node.right)
      if(rightCheck === -1) return -1

      if(Math.abs(leftCheck - rightCheck) > 1) return -1

      return Math.max(leftCheck, rightCheck) + 1
    }

    return checkBalance(node) !== -1
  }

}
