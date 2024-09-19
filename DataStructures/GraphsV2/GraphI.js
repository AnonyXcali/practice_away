class Graph {
    constructor() {
        this.adjacencyList = new Map();
        this.visited = new Map();
    }
    addNode(value) {
        if (!this.adjacencyList.get(value)) {
            this.adjacencyList.set(value, []);
        }
    }
    addEdge(from, to) {
        const fromNode = { value: from };
        const toNode = { value: to };
        if (!this.adjacencyList.has(from)) {
            this.addNode(from);
        }
        if (!this.adjacencyList.has(to)) {
            this.addNode(to);
        }
        const fromEdge = {
            from: fromNode,
            to: toNode,
        };
        const toEdge = {
            from: toNode,
            to: fromNode,
        };
        this.adjacencyList.get(from).push(fromEdge);
        this.adjacencyList.get(to).push(toEdge);
    }
    printGraph() {
        for (const [node, edges] of this.adjacencyList.entries()) {
            const edgeList = edges.map(edge => edge.to.value).join(", ");
            console.log(`${node} => ${edgeList}`);
        }
    }
    dfs(start) {
        let visited = new Set();
        let stack = [start];
        while (stack.length) {
            let curr = stack.pop() || "";
            if (curr && !visited.has(curr)) {
                console.log(curr);
                visited.add(curr);
                let edges = this.adjacencyList.get(curr);
                if (edges) {
                    for (let edge of edges) {
                        if (!visited.has(edge.to.value)) {
                            stack.push(edge.to.value);
                        }
                    }
                }
            }
        }
    }
    bfs(start) {
        let visited = new Set();
        let queue = [];
        queue.unshift(start);
        visited.add(start);
        while (queue.length) {
            let popped = queue.shift();
            console.log(popped);
            let edges = this.adjacencyList.get(popped) || [];
            for (let edge of edges) {
                if (!visited.has(edge.to.value)) {
                    queue.push(edge.to.value);
                    visited.add(edge.to.value);
                }
            }
        }
    }
}
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
// Print the adjacency list representation of the graph
//graph.printGraph();
graph.bfs("A");
