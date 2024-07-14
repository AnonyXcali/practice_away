class BinarySearchTree {
  constructor() {
    this.root = null
    this.currentSum = 0
    this.result = []
  }

  insertNode(node, newNode) {

    // check if the new node's value is less than root
    if(node.key > newNode.key) {
      //if the root node has no left value
      //then make the left of root paired to new node
      if(!node.left) {
        node.left = newNode
      } else {
        //else call the insert node func again
        this.insertNode(node.left, newNode)
      }
    } else {
      if(!node.right) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }

  }
  
  insert(value) {
    const newNode = new Node(value)

    if(!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  searchNode(node, value) {
    if(node) {
      if(node.key === value) {
        return true
      }

      if(value < node.key) {
        return this.searchNode(node.left, value)
      } else {
        return this.searchNode(node.right, value)
      }
    }

    return false
  }

  search(valueToBeSearched) {
    return this.searchNode(this.root, valueToBeSearched)
  }

  #inOrderTraverseNode(node, callback) {
    
    if(node !== null) {
      this.#inOrderTraverseNode(node.left, callback)
      callback(node.key, node, this.root.key)
      this.#inOrderTraverseNode(node.right, callback)
    }
  }

  inOrderTraverse(callback){
    //smallest to largest

    /**
     * idea is to get to the smallest
     * number or node with the smallest
     * number possible.
     * 
     * once reached, we should ??
     */

    this.#inOrderTraverseNode(this.root, callback)
  }

  #preOrderTraverseNode(node, callback) {
    if(node) {
      callback(node.key, node, this.root.key)
      this.#preOrderTraverseNode(node.left, callback)
      this.#preOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverse(callback) {
    this.#preOrderTraverseNode(this.root, callback)
  }

  #postOrderTraverseNode(node, callback) {
    if(node) {
      this.#postOrderTraverseNode(node.left, callback)
      this.#postOrderTraverseNode(node.right, callback)
      callback(node.key, node, this.root.key)
    }
  }

  postOrderTraverse(callback) {
    this.#postOrderTraverseNode(this.root, callback)
  }

  minNode(node) {
    if(node){
      while(node && node.left) {
        node = node.left
      }
      console.log("??", node.key)
      return node.key
    }

    return false
  }

  min() {
    return this.minNode(this.root)
  }

  maxNode(node) {
    if(node){
      while(node && node.right) {
        node = node.right
      }
      return node.key
    }

    return false
  }

  max() {
    return this.maxNode(this.root)
  }

  removeNode(node, key) {
    if(!node) {
      return null
    }

    if(key < node.key) { // which means we need to set the left of the node
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.key) { // which means we need to set the right of the node
      node.right = this.removeNode(node.right, key)
      return node
    } else { // node's value matches the key
      // if no children
      if(!node.left && !node.right) {
        node = null
        return node
      }

      if(!node.left) {
        node = node.right
        return node
      }

      if(!node.right) {
        node = node.left
        return node
      }

      let auxillary = this.minNode(node.right)
      console.log("??", auxillary)
      node.key = auxillary
      node.right = this.removeNode(node.right, auxillary)
      return node
    }
  }

  remove(valueToBeDeleted) {
    this.root = this.removeNode(this.root, valueToBeDeleted)
  }

  printSum() {
    return this.result
  }
}

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

const store = []
const result = []
let currentSum = 0

const print = (key, node, rootValue) => {
  store.push(key)

  // if(!node.left && !node.right) {
  //   store.push(rootValue)
  // }
}

const sum = (key, node, rootValue) => {
  const rV = rootValue
  currentSum += key

  //check if the node is lead
  if(!node.left && !node.right) {
    result.push(currentSum)
    currentSum = rV
  }
}

const banyan = new BinarySearchTree()
// banyan.insert(10)
// banyan.insert(5)
// banyan.insert(12)
// banyan.insert(4)
// banyan.insert(9)
// banyan.insert(7)
// banyan.insert(11)
// banyan.insert(13)
banyan.insert(10)
banyan.insert(12)
banyan.insert(5)
banyan.insert(4)

//remove 5
//banyan.remove(5)
banyan.inOrderTraverse(print)
console.log(store)
//console.log(banyan.printSum())