/**
 * Q: Subtree of a Binary Tree
 * Given the roots of two binary trees root and subRoot, return true if 
 * there is a subtree of root with the same structure and node values of 
 * subRoot and false otherwise.
 * 
 * A subtree of a binary tree tree is a tree that consists of a 
 * node in tree and all of this node's descendants. The tree tree 
 * could also be considered as a subtree of itself.
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
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    const traverse = (node) => {
      if(node) {
        if(node.value === subRoot.value && bfs(node)) {
          return true
        }
        return traverse(node.left) || traverse(node.right);
      }

      return false
    }

    const bfs = (node) => {
      let queueOne = [node]
      let queueTwo = [subRoot]
      
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

      return queueOne.length === 0 && queueTwo.length === 0
    }
    
    return traverse(root)
  }


  isSubtree_clean(root, subRoot) {
    if(!subRoot) return true
    if(!root) return false

    if(this.isSameTree(root, subRoot)) return true

    return this.isSubtree_clean(root.left, subRoot) || this.isSubtree_clean(root.right, subRoot)
  }

  isSameTree(p, q) {
    if(!p && q) return false
    if(p && !q) return false
    if((!p.right && q.right) || (p.right && !q.right)) return false
    if((!p.left && q.left) || (p.left && !q.left)) return false
    if(p.value !== q.value) return false

    return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
  }
}
