class Tree {
  constructor() {
    this.root = null
    this.baseSum = 0
  }

  isLeaf(node) {
    return !node.left && !node.right
  }

  #traversalLogic(node, callback) {
    if(node) {
      if(this.isLeaf(node)) {
        callback(node.key, this.baseSum, true)
      } else {
        this.baseSum = callback(node.key, this.baseSum, false)
        this.#traversalLogic(node.left, callback)
        this.#traversalLogic(node.right, callback)
        this.baseSum = this.root.key
      }
    }
  }

  branchSumTraversal(callback) {
   this.#traversalLogic(this.root, callback, this.globalValue)
  }

  insertNode(node, newNode) {
    if(newNode.key < node.key) {
      if(!node.left) {
        node.left = newNode
      } else {
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

const callFunc = (key) => {
  store.push(key)
}

const sumFunc = (val, baseSum, isLeaf = false) => {
 let currentSum = val + baseSum
 if(isLeaf) {
   result.push(currentSum)
   currentSum = 0
 }

 return currentSum
}

const banyan = new Tree()
// banyan.insert(10)
// banyan.insert(12)
// banyan.insert(5)
// banyan.insert(4)
// banyan.insert(9)
// banyan.insert(7)
// banyan.insert(11)
// banyan.insert(13)

banyan.insert(1)
banyan.insert(2)
banyan.insert(3)
banyan.insert(4)
banyan.insert(5)
banyan.insert(6)
banyan.insert(7)
banyan.insert(8)
banyan.insert(9)
banyan.insert(10)


banyan.branchSumTraversal(sumFunc)
console.log(result)
