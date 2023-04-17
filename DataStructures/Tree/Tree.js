class Tree {
  constructor() {
    this.root = null
  }

  insertNode(node, nodeToBeInserted) {
    node.children.push(nodeToBeInserted)
  }

  isParent(node) {
    return node.parent
  }

  traverse(callback) {
    if(this.isParent(node)) {
      callback
    }
  }

  insert(value) {
    const newNode = new Node(value)
    if(!this.root) {
      this.root = newNode
    } else {
      newNode.parent = this.root
      this.insertNode(this.root, newNode)
    }
  }
}

class Node {
  constructor(key) {
    this.key = key
    this.children = []
    this.parent = null
  }
}

const banyan = new Tree()
banyan.insert(10)
banyan.insert(2)
banyan.insert(11)


//10 --> [2, 11]


