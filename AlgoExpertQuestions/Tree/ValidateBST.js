class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  validate(node) {
    let isInvalid = false
    if(node) {
      if(node.left) {
        isInvalid = node.left.value > node.value
      }

      if(node.right) {
        isInvalid = node.right.value < node.value
      }
    }
    return isInvalid
  }

  #preOrderNodeTraverse(node, callback) {
    if(node) {
      let isInvalid = callback(node)
      if(isInvalid) return false
      this.#preOrderNodeTraverse(node.left, callback)
      this.#preOrderNodeTraverse(node.right, callback)
      return true
    }
    return true
  }

  preOrderTraverse(callback) {
    return this.#preOrderNodeTraverse(this, callback)
  }

  #inorderNodeTraverse(node, callback) {
    if(node) {
      this.#inorderNodeTraverse(node.left, callback)
      callback(node.value)
      this.#inorderNodeTraverse(node.right, callback)
    }
  }

  inorderTraverse(callback) {
    this.#inorderNodeTraverse(this, callback)
  }

  #insertNode(root, node) {
    if(node) {
      if(node.value < root.value) {
        if(!root.left) {
          root.left = node
        } else {
          this.#insertNode(root.left, node)
        }
      } else {
        if(!root.right) {
          root.right = node
        } else {
          this.#insertNode(root.right, node)
        }
      }
    }

  }

  insert(value) {
    const newNode = new Tree(value)
    this.#insertNode(this, newNode)
    return this
  }
}

let result = []

const print = (value) => {
  result.push(value)
}


const tree = new Tree(10)
tree.insert(9)
tree.insert(15)
const isTreeValid = tree.preOrderTraverse(tree.validate)
console.log(isTreeValid)


// ValidateBST()