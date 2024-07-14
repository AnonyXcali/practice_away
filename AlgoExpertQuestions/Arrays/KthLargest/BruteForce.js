class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  #inorderNodeTraverse(node, callback) {
    if(node) {
      this.#inorderNodeTraverse(node.right, callback)
      callback(node)
      this.#inorderNodeTraverse(node.left, callback)
    }
  }

  inOrder(callback) {
    this.#inorderNodeTraverse(this, callback)
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

function kthLargest(array, k) {
  
  let store = []

  let newTree = new Tree(array[0])
  for(let index = 1; index < array.length ; index += 1) {
    newTree.insert(array[index])
  }

  function kth(node) {
    if(node) {
      store.push(node.value)
    }
  }
  
  newTree.inOrder(kth)
  return store[k - 1]
}

let arr = [3,2,1,5,6,7]
let kthLarge = kthLargest(arr, 2)
console.log(kthLarge)