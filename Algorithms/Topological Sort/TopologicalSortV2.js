class AdjacencyList {
  constructor() {
    this.map = {}
    this.topologicalSortedArray = []
    this.isCycle = false
  }

  put(key, value) {
    let job = null
    if(value) {
      job = new MapNode(value)
    }
    if(!this.map[key]) {
      this.map[key] = []
      if(job) {
        this.map[key].push(job)
      }
    } else {
      this.map[key].push(job)
    }
  }

  printGraph() {
    return this.map
  }

  getOrderedJobs(jobs) {
    for(let index = 0; index < jobs.length; index += 1) {
      let detectCycle = this.depthFirstSearch(jobs[index])
      if(detectCycle) break
    }

    if(this.isCycle) return []

    return this.getToplogicalSort()
  }

  depthFirstSearch(index) {
    let children = this.map[index]
    if(children.length <= 0) {
      return false
    }
    for(let index = 0; index < children.length; index += 1) {
       this.isCycle = this.dfs(children[index])
       if(this.isCycle) {
         return true
       }
    }
    return false
  }

  dfs(node) {
    if(node.visited) return false

    if(node.visiting) return true

    if(this.isCycle) return true

    node.visiting = true
    let currentNodeID = node.id
    let children = this.map[currentNodeID]

    if(children.length <= 0) {
      node.visited = true
      node.visiting = false
      this.topologicalSortedArray.push(node.id)
      return false
    }

    for(let index = 0; index < children.length; index += 1) {
      let detectCycle = this.dfs(children[index])

      if(detectCycle) {
        this.isCycle = true
        return true
      }
    }

    node.visited = true
    node.visiting = false
    this.topologicalSortedArray.push(node.id)
  }

  getToplogicalSort() {
    return this.topologicalSortedArray
  }
}


class MapNode {
  constructor(id) {
    this.id = id
    this.visited = false
    this.visiting = false
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

  return graphList.getOrderedJobs(tasks)
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