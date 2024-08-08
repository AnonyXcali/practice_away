/**
 * Q: Count Good Nodes in Binary Tree
 * Within a binary tree, a node x is considered good 
 * if the path from the root of the tree to the node x 
 * contains no nodes with a value greater than the value of node x
Given the root of a binary tree root, return the number of good nodes within the tree.
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
  goodNodes(root) {
    let goodNodeCount = 0

    //because the root node itself is a goodNode
    if(!root.left && !root.right) return 1

    const traverse = (node, maxVal) => {
      if(node) {
        if(node.val >= maxVal) {
          goodNodeCount += 1
          maxVal = node.val
        }
        traverse(node.left, maxVal)
        traverse(node.right, maxVal)
      }
    }

    traverse(root, root.val)

    return goodNodeCount
  }
}
