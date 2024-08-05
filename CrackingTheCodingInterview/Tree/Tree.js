/**
 * Implement a tree
 * Add the following methods
 * insert, delete, search, postOrder, preOrder, inOrder,
 * bfs, dfs
 */

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let current = this.root
    let newNode = new Node(value)

    if(!current) {
      this.root = newNode
    } else {
      this.#insertNode(current, newNode)
    }
  }

  #insertNode(node, newNode) {
    if(node.value > newNode.value) {
      if(!node.left) {
        node.left = newNode
        return
      }
      this.#insertNode(node.left, newNode)
    } else if(node.value < newNode.value) {
      if(!node.right) {
        node.right = newNode
        return
      }
      this.#insertNode(node.right, newNode)
    }
  }

  remove(value) {
    let current = this.root
    if(!current) return "The tree doesn't exist."
    this.#removeNode(current, value)
  }

  #removeNode(node, target) {
    if(node === null) {
      return null
    } else if(target < node.value) {
      node.left = this.#removeNode(node.left, target)
      return node
    } else if(target > node.value) {
      node.right = this.#removeNode(node.right, target)
      return node
    } else {
      //handling the case for one child node
      if(node.left === null) {
        return node.right
      } else if(node.right === null) {
        return node.left
      }

      //two child node case
      let minRight = this.findMinNode(node.right)
      node.value = minRight.value
      node.right = this.#removeNode(node.right, minRight.value)
      return node
    }
  }

  search(node, value) {
   if(!node || node === null) return null
   if(value > node.value) {
    return this.search(node.right, value)
   } else if(value < node.value) {
    return this.search(node.left, value)
   } else {
    return node
   }
  }

  //left, current, right
  inOrder(node, callback) {
    if(node) {
      this.inOrder(node.left, callback)
      callback(node.value)
      this.inOrder(node.right, callback)
    }
  }

  //current, left, right
  preOrder(node, callback) {
    if(node) {
      callback(node.value)
      this.preOrder(node.left, callback)
      this.preOrder(node.right, callback)
    }
  }

  //left, right, current
  postOrder(node, callback) {
    if(node) {
      this.postOrder(node.left, callback)
      this.postOrder(node.right, callback)
      callback(node.value)
    }
  }

  //bfs
  levelOrder(callback) {
    let queue = []
    if(this.root) {
      queue.push(this.root)
      while(queue.length > 0) {
        let current = queue.shift()
        callback(current.value)
        if(current.left) {
          queue.push(current.left)
        }

        if(current.right) {
          queue.push(current.right)
        }
      }
    }
  }

  findMinNode(node) {
    if(node.left === null) return node
    else return this.findMinNode(node.left)
  }
  
}


function main() {
  const tree = new Tree()
  tree.insert(10)
  tree.insert(5)
  tree.insert(15)
  tree.insert(2)
  tree.insert(6)
  tree.insert(11)
  tree.insert(3)

  let root = tree.root

  tree.remove(5)
  tree.insert(5)

  tree.inOrder(root, (value) => {
    console.log(value)
  })



}

main()