class BST {
  constructor(value, left, right) {
    this.value = value || null
    this.left = left || null
    this.right = right || null
    this.leftSubTreeChildren = 0
  }

  updateChildCount() {
    this.leftSubTreeChildren += 1
  }
}

function addNode(node, value) {
  let newNode = new BST(value)
  let current = node
  let greaterCount = 0

  while(current) {
    if(value > current.value) {
      greaterCount = greaterCount + 1 + current.leftSubTreeChildren
      if(!current.right) {
        current.right = newNode
        return greaterCount
      }

      current = current.right
    } else {
      current.updateChildCount()
      if(!current.left) {
        current.left = newNode
        return greaterCount
      }

      current = current.left
    }
  }
}

function updateResult (array, index, value) {
  array[index] = value
  return array
}

function rightSmallerThan(array) {

  //create the first node
  let resultant = []
  let rootNode = new BST(array[array.length -1])
  resultant[array.length - 1] = 0

  for(let index = array.length - 2; index > -1; index -= 1) {
    resultant[index] = addNode(rootNode, array[index])
  }

  return resultant
}

// Do not edit the line below.