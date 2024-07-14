class AdjacencyList {
  constructor() {
    this.map = {}
    this.visited = {}
    this.topologicalSortedArray = []
    this.inProgress = null
    this.isCycle = false
  }

  put(key, value) {
    if(!this.map[key]) {
      this.map[key] = []
      this.visited[key] = false
      if(value) {
        this.map[key].push(value)
      }
    } else {
      this.map[key].push(value)
    }
  }

  printGraph() {
    return this.map
  }

  detectInvalid(jobs) {
    this.depthFirstSearch(jobs)
    return this.isCycle
  }

  depthFirstSearch(jobs) {
    for(let index = 0; index < jobs.length; index += 1) {
      if(this.isCycle) {
        return
      }
      this.inProgress = jobs[index]
      this.dfs(jobs[index])
    }
  }


  dfs(at) {
    if(this.visited[at]) return
    
    let startIndexChildren = this.map[at]
    
    if(startIndexChildren.length === 0) {
      this.visited[at] = true
      this.topologicalSortedArray.push(at)
      return
    }
    
    for(let index = 0; index < startIndexChildren.length; index += 1) {
      let currIndex = startIndexChildren[index]
      if(this.inProgress === currIndex) {
        this.isCycle = true
        return
      }
      if(!this.visited[currIndex]) {
        this.dfs(currIndex)
      }
    }
    
    this.visited[at] = true
    this.topologicalSortedArray.push(at)
    return
  }

  getToplogicalSort() {
    return this.topologicalSortedArray
  }
}


function topologicalSort(tasks, deps) {
  const graphList = new AdjacencyList()
  
  for(let index = 0; index < tasks.length; index += 1) {
    graphList.put(tasks[index])
  }

  for(let index = 0; index < deps.length; index += 1) {
    graphList.put(deps[index][1], deps[index][0])
  }
  
  
  let invalidDependancyGraph = graphList.detectInvalid(tasks)

  if(invalidDependancyGraph) {
    return []
  } else {
    graphList.depthFirstSearch(tasks)
  }

  return graphList.getToplogicalSort() || []
}

const dependencies = [
  [1, 2],
  [1, 3],
  [3, 2],
  [4, 2],
  [4, 3],
]

let ans = topologicalSort([1,2,3,4], dependencies)
console.log(ans)