function invertBinaryTree(tree) {
  // Write your code here.
  let bfsQueue = []
  bfsQueue.push(tree)

  while(bfsQueue.length > 0) {
    let current = bfsQueue[0]

    //if both exists
    if(current && current.left && current.right) {
      let temp = current.left
      current.left = current.right
      current.right = temp

      bfsQueue.push(current.left)
      bfsQueue.push(current.right)
    } else if(current && !current.left && current.right) {
      let temp = current.right
      current.right = null
      current.left = temp
      bfsQueue.push(temp)
    } else if(current && current.left && !current.right) {
      let temp = current.left
      current.left = null
      current.right = temp
      bfsQueue.push(temp)
    }

    let popped = bfsQueue.shift()
  }

  return tree
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
