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
}
const graph = new Graph();
graph.addNode('A');
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
