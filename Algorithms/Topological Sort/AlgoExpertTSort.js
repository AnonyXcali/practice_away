class JobGraph {
  constructor(jobs) {
    this.nodes = []
    this.graph = {}
    for(let index = 0; index < jobs.length; index += 1) {
      this.addNode(jobs[index])
    }
  }

  addNode(job) {
    this.graph[job] = new JobNode(job)
    this.nodes.push(this.graph[job])
  }

  getJob(id) {
    return this.graph[id]
  }

  printGraph() {
    console.log(this.graph)
  }

  getOrderedJobs() {
    let orderedJobs = []
    let currNodes = this.nodes

    while(currNodes.length > 0) {
      let curr = this.nodes.pop()
      let detectCycle = this.dfs(curr, orderedJobs)
      if(detectCycle) {
        return []
      }
    }

    return orderedJobs
  }

  dfs(node, ordered) {
    if(node.visited) return false

    if(node.visiting) return true

    node.visiting = true

    for(let index = 0; index < node.prereq.length; index += 1) {
      let cycle = this.dfs(node.prereq[index], ordered)
      
      if(cycle) {
        return true
      }
    }

    node.visited = true
    node.visiting = false
    ordered.push(node.job)
    return false
  }

}

class JobNode {
  constructor(job){
    this.job = job
    this.prereq = []
    this.visiting = false
    this.visited = false
  }
}


function topologicalSort(tasks, deps) {
  let jobsGraph = createJobsGraph(tasks, deps)
  
  return jobsGraph.getOrderedJobs()

}

function createJobsGraph(tasks, deps) {
  const graph = new JobGraph(tasks)

  for(let index = 0; index < deps.length; index += 1) {
    let job = deps[index][1]
    let prereq = deps[index][0]

    let jobNode = graph.getJob(job)
    let preReqNode = graph.getJob(prereq)
    jobNode.prereq.push(preReqNode)
  }

  return graph
}

const dependencies = [
  [1, 2],
  [1, 3],
  [3, 2],
  [4, 2],
  [4, 3],
]

console.log(topologicalSort([1,2,3,4], dependencies))
