function TreeNode(value, left, right) {
  this.value = value !== undefined ? value : null
  this.left = left ? left : null
  this.right = right ? right : null
}

function traverse(node) {

  let queue = []
  let current = node

  while(current || queue.length > 0) {
    while(current) {
      queue.push(current)
      current = current.left
    }

    current = queue.pop()
    console.log(current.value)

    current = current.right
  }

}

function sortedArrayToHBST(array) {
  if(array.length === 0) {
    return null
  }

  let mid = Math.floor(array.length / 2)
  let node = new TreeNode(array[mid])
  node.left = sortedArrayToHBST(array.slice(0, mid))
  node.right = sortedArrayToHBST(array.slice(mid + 1, array.length))

  return node
}

const answer = sortedArrayToHBST([-10,-3,0,5,9, 10])
traverse(answer)
/**
 * [-10,-3,0,5,9]
 *  array -> mid -> node associate 0
 *  => left -> [-10, -3]
 *      -> -3
 *         -> [-10]
 *            -> null
 * => right -> [5,9]
 *      -> 5
 *        -> [9]
 *          -> null
 
 */