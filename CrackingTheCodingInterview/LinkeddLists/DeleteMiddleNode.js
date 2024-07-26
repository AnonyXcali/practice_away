/**
 * Q)2.3
 * Delete Middle Node
 * Implement an algorithm to delete a node in the middle (i.e, any node but the first
 *  and last node not necessarily the exact middle) of a singly linked list, given
 * only access to that node.
 */

class Node {
  constructor(value) {
    this.value = value
    this.next = null
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
      return
    }

    let current = this.head
    while(current.next) {
      current = current.next
    }

    current.next = node
    this.length += 1
    return
  }

  print() {
    let current = this.head
    while(current) {
      console.log(current.value)
      current = current.next
    }
  }

  printLinkedList() {
    let current = this.head
    let str = ""
    while(current) {
      str += `${current.value}${current.next ? "->" : ""}`
      current = current.next
    }
    return str
  }
  
  currentLength() {
    return this.length
  }

  deleteByPosition(pos) {
    if (pos < 1 || pos > this.length) return this.printLinkedList();

    if (pos === 1) {
      this.head = this.head.next;
      this.length -= 1;
      return this.printLinkedList();
    }

    let current = this.head
    let currPost = 1
    while(current) {
      if(currPost + 1 === pos) {
        current.next = current.next.next
        return this.printLinkedList()
      }
      current = current.next
      currPost += 1
    }
    return this.printLinkedList()
  }

  deleteMiddleNode_naive() {
    const currentCount = this.currentLength()
    if(currentCount <= 2) {
      return this.printLinkedList()
    }

    let mid = 0
    
    if(currentCount % 2 === 0) {
      mid = Math.floor(currentCount / 2)
    } else {
      mid = Math.floor(currentCount / 2) + 1
    }

    return this.deleteByPosition(mid)
  }

  deleteNodeIfOnlyNodeGiven(node) {
    if(node === null || node.next === null) {
      return false
    }

    let nextNode = node.next
    node.value = nextNode.value
    node.next = nextNode.next
    return true
  }
}


function main() {
  let ll = new LinkedList()
  ll.add("a")
  ll.add("b")
  ll.add("c")
  ll.add("d")
  ll.add("e")

  let current = ll.head
  while(current) {
    if(current.next && current.next.value === "c") {
      current = current.next
      break
    }
    current = current.next
  }

  //console.log(current)

  console.log(ll.deleteNodeIfOnlyNodeGiven(current))
  console.log(ll.printLinkedList())
}

main()