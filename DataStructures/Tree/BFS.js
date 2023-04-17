class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }



  bfs() {
    if(!this) return

    let bfsQueue = new Queue()

    let deQueuedArray = []
    
    bfsQueue.enqueue(this)

    console.log(bfsQueue.size)
    while(bfsQueue.size) {
      console.log("hey")
       let current = bfsQueue.first.value

       let childrenNodes = []
       if(current.left) childrenNodes.push(current.left)
       if(current.right) childrenNodes.push(current.right)

       for(let key in childrenNodes) {
         bfsQueue.enqueue(childrenNodes[key])
       }

       deQueuedArray.push(current.value)

       bfsQueue.dequeue()
    }

    return deQueuedArray
  }

  #insertNode(root, node) {
    if(root) {
      if(node.value < root.value) {
        if(!root.left) {
          root.left = node
        } else {
          this.#insertNode(root.left, node)
        }
      } else {
        if(!root.right) {
          root.right = node
        } else {
          this.#insertNode(root.right, node)
        }
      }
    }
  }

  insert(value) {
    const newNode = new Tree(value)
    this.#insertNode(this, newNode)
  }
  
}

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    const node = new QueueNode(value)
    if(!this.first && !this.last || !this.size) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }

    this.size += 1
    return this
  }

  dequeue() {
    if(!this.size) {
      return null
    }
    
    let dequeuedElement = this.first
    const nextFirst = this.first.next
    if(!nextFirst) {
      this.last = nextFirst // null?
    }
    this.first = nextFirst
    this.size -= 1
    dequeuedElement.next = null
    return dequeuedElement
  }

}

const Banyan = new Tree(10)
Banyan.insert(5)
Banyan.insert(13)
Banyan.insert(4)
Banyan.insert(6)
Banyan.insert(12)
Banyan.insert(15)

console.log(Banyan.bfs())