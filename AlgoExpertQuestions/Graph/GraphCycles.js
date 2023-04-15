function cycleInGraph(edges) {
  // Write your code here.
  let flag = false
  let startIndex = null
  let map = {}

  for(let index = 0; index < edges.length; index += 1) {
    startIndex = index
    traverse(index)
  }

  function traverse(node) {
    map[node] = "grey"

    const children = edges[node] || []
    if(children.length <= 0 || flag) {
      map[node] = true
      return
    }

    for(let innerIndex = 0; innerIndex < children.length; innerIndex +=1 ) {
      let currentIndex = children[innerIndex]

      if(map[currentIndex] === "grey") {
        flag = true
      }
      traverse(currentIndex)
    }

    map[node] = true
  }
  
  return flag;
}

const check = {
  0: true,
  1: true,
  2: true,

}

const edges = [
  [1, 2],
  [2],
  []
]

console.log(cycleInGraph(edges))