//conditions for cya
// it has to have an ancestor who is the top ancestor.

//given 2 descendent nodes 
// lets travel upwards until the ancestors ancestors is null

//lets make a map storing all the youngest common ancestors of each node
//we shall use BFS
//start with topmost node.
//store the value in map 
//A: null
//B: A
//C: A
//D: B
//E : B
//F: C
//G: C
//H: D --> B
//I I --> B


let possibleYCA = null

function dfs(node) {
  const current = node
  while(!current.ancestor) {
    possibleYCA = current.ancestor.ancestor !== null && current.ancestor
    current = possibleYCA ? current.ancestor : null
  }
}
