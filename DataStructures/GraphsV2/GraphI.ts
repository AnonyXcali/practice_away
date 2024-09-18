interface G_Node {
  value: string
}

interface Edge {
  from: G_Node
  to: G_Node
  weight?: number
}

class Graph {
  private adjacencyList: Map<string, Edge[]>
  private visited: Map<string, boolean>

  constructor() {
    this.adjacencyList = new Map()
    this.visited = new Map()
  }

  addNode(value: string): void {
    if(!this.adjacencyList.get(value)) {
      this.adjacencyList.set(value, [])
    }
  }

  addEdge(from: string, to: string): void {
    const fromNode: G_Node = { value: from }
    const toNode: G_Node = { value: to }

    if(!this.adjacencyList.has(from)) {
      this.addNode(from)
    }

    if(!this.adjacencyList.has(to)) {
      this.addNode(to)
    }

    const fromEdge: Edge = {
      from: fromNode,
      to: toNode,
    }

    const toEdge: Edge = {
      from: toNode,
      to: fromNode,
    }

    this.adjacencyList.get(from)!.push(fromEdge)
    this.adjacencyList.get(to)!.push(toEdge)
  }
  

  printGraph(): void {
    for(const [node, edges] of this.adjacencyList.entries()) {
      const edgeList = edges.map(edge => edge.to.value).join(", ");
      console.log(`${node} => ${edgeList}`)
    }
  }

  dfs(start: string) {
    let visited = new Set()
    let stack: string[] = [start]

    while(stack.length) {
      let curr = stack.pop() || ""

      if(curr && !visited.has(curr)) {
        console.log(curr)
        visited.add(curr)

        let edges = this.adjacencyList.get(curr)

        if(edges) {
          for(let edge of edges) {
            if(!visited.has(edge.to.value)) {
              stack.push(edge.to.value)
            }
          }
        }
      }
    }

  }
}


const graph = new Graph()

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

// Adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

// Print the adjacency list representation of the graph
graph.printGraph();
graph.dfs("A")