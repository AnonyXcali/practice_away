function insert(array, tree) {
  if(array.length > 0 && array.length < 2) {
    tree.insert(array[0])
    return
  } else if(array.length <= 0) {
    return
  }
  
  let mid = Math.floor(array.length / 2)
  tree.insert(array[mid])

  let left = array.slice(0, mid)
  let right = array.slice(mid + 1, array.length)

  insert(left, tree)
  insert(right, tree)
}

function minHeightBst(array) {
  // Write your code here.
  let mid = Math.floor(array.length / 2)
  let tree = new BST(array[mid])
  let leftArray = array.slice(0, mid)
  let rightArray = array.slice(mid + 1, array.length)
  insert(leftArray, tree)
  insert(rightArray, tree)

  return tree
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22])