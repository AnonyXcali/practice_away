/**
 * Q)2.6
 * Detect Cycle: Given a circular linked list, implement an algorithm that returns
 * the node at the beginning of the loop.
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

    while(oldReferencePointer && newReversedPointer) {
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

  createCycleAtPos(pos) {
    let positionForLoop = this.head
    let tail = this.head

    while(tail.next) {
      tail = tail.next
    }

    while(positionForLoop) {
      if(positionForLoop.value === pos) {
        break
      }
      positionForLoop = positionForLoop.next
    }

    tail.next = positionForLoop

    return this.head
  }
}

class Solution {
  storeReferences(ll) {
    let current = ll.head
    let references = new Set()

    while(current.next) {
      references.add(current)
      current = current.next
    }
    return references
  }

  floydCycleDetectionAlgorithm(ll) {
    let pointerA = ll.head
    let pointerB = ll.head

    while(pointerB && pointerB.next) {
      pointerA = pointerA.next
      pointerB = pointerB.next.next
      if(pointerA === pointerB) {
        console.log("Cycle exists")
        break
      }
    }

    if(pointerA === null || pointerB.next === null) {
      return null
    }

    pointerA = ll.head

    while(pointerA !== pointerB) {
      pointerA = pointerA.next
      pointerB = pointerB.next
    }

    return pointerB
  }
}


function main() {
  let ll = new LinkedList()
  ll.add("A")
  ll.add("B")
  ll.add("C")
  ll.add("D")
  ll.add("E")
  ll.createCycleAtPos("C")
  let sol = new Solution()
  let answer = sol.floydCycleDetectionAlgorithm(ll)
  console.log(answer)
  
}

main()