class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  add(element) {
    const node = new Node(element)
    if(!this.head) {
      this.head = node
    } else {
      let current = this.head

      while(current.next) {
        current = current.next
      }

      current.next = node

      this.length += 1
    }
  }

  getHead() {
    return this.head
  }

  reverse(head){
    if(head == null || head.next == null) return head
    let reversedNode = this.reverse(head.next)
    head.next.next = head // here we point the successor node next to its previous node, by making the successor node the previous
    head.next = null // here we make the next node which is previous to the successor and point it to null, hence removing circular linking
    this.head = reversedNode
    return this.head
  }
  
  append(element, pos) {
    const node = new Node(element)

    if(!this.head) {
      this.head = node
    } else {
      let current = this.head
      let index = 0

      while(current.next && index < pos) {
        current = current.next
        index += 1
      }

      let temp = current.next
      current.next = node
      node.next = temp
      
      this.length += 1
    }
  }

  print() {
    let current = this.head
    let str = ""
    while(current) {
      str += `${current.element} ${current.next ? "->" : ""} `
      current = current.next
    }

    return str
  }
}

class Node {
  constructor(element) { 
    this.element = element
    this.next = null
  }
}

const linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)
linkedList.add(6)
linkedList.reverse(linkedList.getHead())
console.log(linkedList.print())