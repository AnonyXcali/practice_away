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

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let node = new Node(value)
    if(!this.root) {
      this.root = node
      return
    }
    this.#insertNode(this.root, node)
  }

  #insertNode(node, newNode) {
    if(newNode.value < node.value) {
      if(!node.left) {
        node.left = newNode
      } else {
        this.#insertNode(node.left, newNode)
      }
    } else if(newNode.value > node.value) {
      if(!node.right) {
        node.right = newNode
      } else {
        this.#insertNode(node.right, newNode)
      }
    }
  }

  remove(value) {
    this.#removeNode(this.root, value)
  }

  #removeNode(node, target) {
    if(!node) return null

    if(node.value > target) {
      node.left = this.#removeNode(node.left, target)
      return node
    } else if(node.value < target) {
      node.right = this.#removeNode(node.right, target)
      return node
    }

    //handling case for 1 child nodes
    if(!node.left) {
      return node.right
    } else if(node.right === null) {
      return node.left
    }

    let minRight = this.findMinNode(node.right)
    node.value = minRight.value
    node.right = this.#removeNode(node.right, target)
    return node
  }

  search(node, target) {
    if(!node) return null

    if(node.value === target) return "Found"

    if(target > node.value) {
      return this.search(node.right, target)
    } else if(target < node.value) {
      return this.search(node.left, target)
    }
  }

  findMinNode(node) {
    if(!node.left) return node
    else return this.findMinNode(node.left)
  }
  
}

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  diameterOfBinaryTree(root) {
    let maxEdge = 0 

    const traverse = (node) => {
      if(!node) return 0

      let leftDepth = traverse(node.left)
      let rightDepth = traverse(node.right)

      maxEdge = Math.max(maxEdge, leftDepth + rightDepth)

      return Math.max(leftDepth, rightDepth) + 1
    }

    traverse(root)

    return maxEdge
  }
}