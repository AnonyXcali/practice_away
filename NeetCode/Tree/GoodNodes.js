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

    //if only right node exists
    if(!root.left && root.right) {
      return root.val < root.right.val ? 2 : 1
    }

    //if only left node exists
    if(!root.right && root.left) {
      return root.val < root.left.val ? 2 : 1
    }

    const traverse = (node, past = []) => {
      if(node) {
        let filtered = past.filter(item => item >= node.val) || []
        if(filtered.length <= 0) {
          goodNodeCount += 1
        }
        if(node.left || node.right) {
          past.push(node.val)
        }
        traverse(node.left, past)
        traverse(node.right, past)
      }
    }

    traverse(node)

    return goodNodeCount
  }
}
