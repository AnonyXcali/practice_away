class Queue {
  constructor() {
    this.list = []
    this.size = 0
  }


  enqueue(element) {
    this.list.push(element)
    this.size += 1
  }

  dequeue() {
    let dequeuedElement = this.list.shift()
    this.size -= 1
    return dequeuedElement
  }

  printQueue() {
    return this.list
  }

}

let newQueue = new Queue()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
console.log(newQueue.printQueue())
newQueue.dequeue()
newQueue.dequeue()

console.log(newQueue.printQueue())
