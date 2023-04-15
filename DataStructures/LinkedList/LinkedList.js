class Node {
  constructor(value) {
    this.value = value
    this.next =  null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  add(value) {
    const node = new Node(value)

    if(!this.head) {
      this.head = node
      this.length += 1
    } else {
      let current = this.head

      while(current.next) {
        current = current.next
      }

      current.next = node
      this.length += 1
    }
  }

  getLength = () => this.length

  print() {
    let current = this.head
    let str = ""
    while(current) {
      str += `${current.value} ${current.next ? "->" : ""} `
      current = current.next
    }

    return str
  }
}

const LL = new LinkedList()
LL.add(1)
LL.add(2)
LL.add(3)
console.log(LL.print())
console.log(LL.getLength())