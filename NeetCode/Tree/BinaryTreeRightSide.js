/**
 * Q: Binary Tree Right Side View
 * 
 * You are given the root of a binary tree. Return only the values of the nodes 
 * that are visible from the right side of the tree, ordered from top to bottom.
 * 
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
   * @return {number[]}
   */
  rightSideView_partial(root) {
    if(!root || root.length <= 0) return []

    let result = []

    const traverseRight = (node) => {
      result.push(node.val)
      if(node.right) {
        traverseRight(node.right)
      }
    }

    traverseRight(root)

    return result
  }


  rightSideView_correct(root) {
    if(!root || root.length <= 0) return []
    let queue = [root]
    let result = []
    while(queue.length > 0) {
      for(let i = 0; i < queue.length; i += 1) {
        if(i === queue.length - 1) { // it means that the element is the right most element for the current node
          let node = queue.shift()
          result.push(node.val)
        }

        if(node.left) {
          queue.push(node.left)
        }

        if(node.right) {
          queue.push(node.right)
        }

      }
    }

  }
}
