class Tree {
    constructor() {
        this.root = null
    }

    bfs(node) {
        let bfsQueue = []
        bfsQueue.push(node)

        while(bfsQueue.length > 0) {
            let current = bfsQueue[0]

            if(current.left) bfsQueue.push(current.left)
            if(current.right) bfsQueue.push(current.right)

            let popped = bfsQueue.shift()
            console.log(popped)
        }
    }

    traverse(node, treeNode) {
        let current = node

        while(current) {
            if(current.value >= treeNode.value) {
                if(!current.left) {
                    current.left = treeNode
                    return
                }
                current = current.left
            } else if(current.value < treeNode.value) {
                if(!current.left) {
                    current.right = treeNode
                    return
                }
                current = current.right
            }
        }
    }

    add(value) {
        let treeNode = new Node(value)

        if(!this.root) {
            this.root = treeNode
        } else {
            this.traverse(this.root, treeNode)
        }
    }

    inOrderTraverse() {
        let queue = []
        let current = this.root

        while(current || queue.length > 0) {

            while(current) {
                queue.push(current)
                current = current.left
            }

            current = queue.pop()
            console.log(current.value)
            
            current = current.right
        }
    }

    print() {
        return this.root
    }
    
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const tree = new Tree()
tree.add(5)
tree.add(13)
tree.add(11)
tree.add(12)
tree.inOrderTraverse()
