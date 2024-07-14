function BST(value, left = null, right = null) {
  this.value = value
  this.left = left
  this.right = right
}

function traverseAndAdd(value, node) {
  debugger;
  let childNode = new BST(value)

  while(node) {
    if(childNode.value >= node.value) {
      if(!node.right) {
        node.right = childNode
        return
      }

      node = node.right
    } else {
      if(!node.left) {
        node.left = childNode
        return
      }

      node = node.left
    }
  }
}

function reconstructBST(preOrderTraversalValues) {
  debugger;
  if(preOrderTraversalValues && preOrderTraversalValues.length < 2) {
    return new BST(preOrderTraversalValues[0])
  }

  //let's create the first element as base root node

  let treeNode = new BST(preOrderTraversalValues[0])

  for(let index = 1; index < preOrderTraversalValues.length; index += 1) {
     traverseAndAdd(preOrderTraversalValues[index], treeNode)
  }

  return treeNode
  
}

const test = [10, 4, 2, 1, 5, 17, 18 ,19]
const answerRoot = reconstructBST(test)
console.log(answerRoot)

