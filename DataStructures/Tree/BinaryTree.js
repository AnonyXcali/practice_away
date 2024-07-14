class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.value = value
  }

  #inOrderNodeTraveral(node, callback) {
    if(node) {
      this.#inOrderNodeTraveral(node.left, callback)
      callback(node.value)
      this.#inOrderNodeTraveral(node.right, callback)
    }
  }

  isLeaf = (node) => !node.left && !node.right

  inorderTraverse(callback) {
    this.#inOrderNodeTraveral(this, callback)
  }

  #searchNode(node, key) {
    if(node) {
      if(node.value === key) {
        return true
      } else if(key < node.value) {
        return this.#searchNode(node.left, key)
      } else if(key > node.value){
        return this.#searchNode(node.right, key) 
      }
    }

    return false
  }

  contains(key) {
    return this.#searchNode(this, key)
  }

  #findMinNode(node) {
    if(node) {
      while(node.left) {
        node = node.left
      }

      return node.value
    }
  }

  min() {
    return this.#findMinNode(this)
  }

  #removeNode(node, key) {
    if(node) {
      if(key < node.value) {
        node.left = this.#removeNode(node.left, key)
        return node
      } else if(key > node.value) {
        node.right = this.#removeNode(node.right, key)
        return node
      } else {
        if(this.isLeaf(node)) {
          node = null
          return null
        }

        if(!node.left) {
          node = node.right
          return node
        }

        if(!node.right) {
          node = node.left
          console.log(node.value)
          return node
        }

        let auxillary = this.#findMinNode(node.right)
        node.value = auxillary
        node.right = this.#removeNode(node.right, auxillary)
        return node
      }
    } else {
      return null
    }

  }

  remove(key) {
    const node =  this.#removeNode(this, key)
    if(node) {
      this.value = node.value
      this.left = node.left
      this.right = node.right
    }
    

    return this
  }

  #insertNode(root, node) {
    if(root) {
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
  }
}

const result = []

const print = (value) => {
  if(value) {
    result.push(value)
  }
}



const newTree = new Tree(1)
for(let index = 2; index < 21; index+= 1) {
  newTree.insert(index)
}

/*
newTree.remove(4)
newTree.remove(6)
newTree.remove(8)
newTree.remove(13)
newTree.remove(15)
newTree.remove(19)
newTree.insert(1)
*/


newTree.inorderTraverse(print)
console.log(result)