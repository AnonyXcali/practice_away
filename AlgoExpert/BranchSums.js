class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(node, value, array) {
  if(!node) {
    return
  } else {
    let sum = node.value + value
    traverse(node.left, sum)
    traverse(node.right, sum)
    array.push(value)
  }
}

function branchSums(root) {
  let sumArray = []
  traverse(root, 0, sumArray)
  return sumArray
}

