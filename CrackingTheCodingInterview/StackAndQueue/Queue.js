class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.queue = []
    this.front = null
    this.rear = null
    this.length = 0
  }

  enqueue_ll(value) {
    const node = new Node(value)
    if(!this.rear) {
      this.front = this.rear = node
      return
    }

    this.rear.next = newNode
    this.rear = newNode
    this.length += 1
  }

  dequeue_ll() {
    if(!this.front) return null
    let nodeToBeDequeued = this.front
    this.front = this.front.next

    if(!this.front) {
      this.rear = null
    }

    this.length -= 1
    return nodeToBeDequeued
  }

  enqueue(element) {
    this.queue.push(element)
  }

  dequeue() {
    return this.queue.shift()
  }

  queueLength() {
    return this.queue.length
  }
}


function main() {
  let queue = new Queue
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  queue.enqueue(5)

  for(i = 0; i < 5; i += 1) {
    console.log(queue.dequeue())
  }
}

main()