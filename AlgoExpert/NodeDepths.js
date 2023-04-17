function nodeDepths(root) {
  // Write your code here.
  let depthTrack = []
  
  traverse(root, 0, depthTrack)

  return depthTrack.reduce((a,b) => a + b, 0)
}

function traverse(node, value, track) {
  if(!node) {
    return
  } else {
    traverse(node.left, value + 1, track)
    traverse(node.right, value + 1, track)
    if(!node.left && !node.right) {
      track.push(value)
    }
  }
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
