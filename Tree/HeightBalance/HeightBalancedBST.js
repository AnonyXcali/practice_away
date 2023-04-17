class Tree {
    constructor() {
        this.root = null
        this.leftSubtreeDepth = 0
        this.rightSubtreeDepth = 0
    }

    traverse(node, startNode) {
        let current = startNode
        
        while(current) {
            if(current.value > node.value){
                if(!current.left) {
                    current.left = node
                    return
                }
                current = current.left
            } else if(current.value < node.value) {
                if(!current.right) {
                    current.right = node
                    return
                }

                current = current.right
            }
        }
    }
    incrementLeftSubtreeDepth() {
        this.leftSubtreeDepth += 1
    }

    incrementRightSubtreeDepth() {
        this.rightSubtreeDepth += 1
    }

    buildHeightBalancedTree(value) {
        let node = new Node(value)

        if(!this.root) {
            this.root = node
            return
        }

        let currentTreeDepthDiff = Math.abs(this.leftSubtreeDepth - this.rightSubtreeDepth)
        console.log(currentTreeDepthDiff)
        if(currentTreeDepthDiff >= 1) {
            this.traverse(node, this.root)
            this.incrementRightSubtreeDepth()
        } else {
            this.traverse(node, this.root)
            this.incrementLeftSubtreeDepth()
        }
    }

    inorderTraverse(method) {
        //we will inOrderTraverse
        let iterativeQueue = []
        let current = this.root

        while(current || iterativeQueue.length > 0) {
            while(current) {
                iterativeQueue.push(current)
                current = current.left
            }

            current = iterativeQueue.pop()
            method(current.value)

            current = current.right
        }
    }

    log(value) {
        console.log(value)
    }

    print() {
        this.inorderTraverse(this.log)
    }

}


class Node {
    constructor(value) {
        this.value = value
    }
}

function test() {
    let arr = [-10, -3, 0, 5, 9, 10]
    let tree = new Tree()
    let mid = Math.floor(arr.length / 2) 
    let leftPointer = 0
    let rightPointer = mid + 1
    let leftArray =  arr.slice(0, mid)
    let rightArray = arr.slice(mid + 1, arr.length)

    //we will store the first element as root in the tree
    tree.buildHeightBalancedTree(arr[mid])
    tree.incrementLeftSubtreeDepth()
    tree.incrementRightSubtreeDepth()

    leftArray.forEach((element) => {
        tree.buildHeightBalancedTree(element)
    })

    rightArray.forEach((element) => {
        tree.buildHeightBalancedTree(element)
    })

    tree.print()
}

test()