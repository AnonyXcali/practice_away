/**
 * Q)2.6
 * Palindrome: Implement a function to check if a linked list is a palindrome
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

  printLinkedList() {
    let current = this.head
    let str = ""
    while(current) {
      str += `${current.value}${current.next ? "->" : ""}`
      current = current.next
    }
    return str
  }

  palindrome() {
    const oldReference = this.head
    const reversed = this.reverseCopy(this.head)
    let oldReferencePointer = oldReference
    let newReversedPointer = reversed

    console.log(reversed)

    while(oldReferencePointer && newReversedPointer) {
      console.log(oldReferencePointer, newReversedPointer)
      if(oldReferencePointer.value !== newReversedPointer.value) {
        return false
      }

      oldReferencePointer = oldReferencePointer.next
      newReversedPointer = newReversedPointer.next
    }

    return true
  }

  reverseCopy(head) {
    let current = head
    let previous = null

    while (current) {
      const newNode = new Node(current.value)
      newNode.next = previous
      previous = newNode
      current = current.next
    }

    return previous
  }

  reverse() {
    let current = this.head
    let previous = null

    while(current.next) {
      let temp = current.next
      current.next = previous
      previous = current
      current = temp
    }

    current.next = previous
    this.head = current

    //return this.printLinkedList()
    return this.head
  }

}


function main() {
  let ll = new LinkedList()
  ll.add(1)
  ll.add(2)
  ll.add(2)
  ll.add(1)
  //console.log(ll.reverse())
  const answer = ll.palindrome()
  console.log("The linked is palindrome", answer)
}

main()