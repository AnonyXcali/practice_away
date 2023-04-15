class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  inorderTraverse(node, callback) {
    if(node) {
      callback()
      
    }
  }
  

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name)
    if(this.children && this.children.length > 0) {
      for(let index = 0; index < this.children.length; index += 1) {
        this.children[index].depthFirstSearch(array)
      }
    }
    return array
  }
}


const nodes = {
  "nodes": [
    {"children": ["B", "C", "D"], "id": "A", "value": "A"},
    {"children": ["E", "F"], "id": "B", "value": "B"},
    {"children": [], "id": "C", "value": "C"},
    {"children": ["G", "H"], "id": "D", "value": "D"},
    {"children": [], "id": "E", "value": "E"},
    {"children": ["I", "J"], "id": "F", "value": "F"},
    {"children": ["K"], "id": "G", "value": "G"},
    {"children": [], "id": "H", "value": "H"},
    {"children": [], "id": "I", "value": "I"},
    {"children": [], "id": "J", "value": "J"},
    {"children": [], "id": "K", "value": "K"}
  ],
  "startNode": "A"
}


