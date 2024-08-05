/**
 * Q: Level order traversal of Binary Tree
 * 
 * Given a binary tree root, return the level order traversal of it 
 * as a nested list, where each sublist contains the values of nodes at 
 * a particular level in the tree, from left to right.
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
   * @return {number[][]}
   */
  levelOrder(root) {
    if(!root) return []
    let temp = []
    let queue = [root]
    let depth = 0
    let result = []
    while(queue.length > 0) {
      if(temp.length === Math.pow(2, depth)) {
        result.push([...temp])
        temp = []
        depth += 1
      }

      let current = queue.shift()
      temp.push(current.val)

      if(current.left) {
        queue.push(current.left)
      }

      if(current.right) {
        queue.push(current.right)
      }
    }

    return result
  }

  levelOrder_gpt(root) {
    let result = []
    let queue = [root]

    while(queue.length > 0) {
      let currentLength = queue.length
      let temp = []

      for(let i = 0; i < currentLength; i += 1) {
        let node = queue.shift()
        temp.push(node.value)

        if(node.left) {
          queue.push(node.left)
        }

        if(node.right) {
          queue.push(node.right)
        }
      }

      result.push(temp)
    }

    return result
  }
}
