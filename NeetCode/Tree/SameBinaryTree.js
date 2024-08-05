/**
 * Q: Same Binary Tree
 * Given the roots of two binary trees p and q, 
 * return true if the trees are equivalent, otherwise return false.
 * 
 * Two binary trees are considered equivalent if they share the exact 
 * same structure and the nodes have the same values.
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
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p, q) {
    if(!p && !q) return true
    if(p && !q || !p && q) return false

    let queueOne = [q]
    let queueTwo = [p]

    while(queueOne.length > 0 && queueTwo.length > 0) {
      let pNode = queueOne.shift()
      let qNode = queueTwo.shift()
      
      //if the values differ
      if(pNode.value !== qNode.value) return false
      //if the leftNode is missing on either nodes.
      if((pNode.left && !qNode.left) || (!pNode.left && qNode.left)) return false
      //if the rightNode is missing on either nodes.
      if((pNode.right && !qNode.right) || (!pNode.right && qNode.right)) return false

      if(pNode.left) {
        queueOne.push(pNode.left)
      }

      if(pNode.right) {
        queueOne.push(pNode.right)
      }

      if(qNode.left) {
        queueTwo.push(qNode.left)
      }

      if(qNode.right) {
        queueTwo.push(qNode.right)
      }

    }

    if(queueOne.length !== queueTwo.length) {
      return false
    }

    return true
  }
}