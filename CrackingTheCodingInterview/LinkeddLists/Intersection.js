/**
 * Q)2.7
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect,
 * Return the intersecting node. Note that the intersection is defined based on reference
 * not value.That is if the kth node of the first linked list is the exact same node (by reference)
 * as the jth node of the second linked list, then they are intersecting.
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

class Solution {
  getLengthsAndTail(ll) {
    let current = ll.head
    let length = 0
    while(current.next) {
      current = current.next
      length += 1
    }

    return {
      length,
      tail: current,
    }
  }

  getKthNode(node, k) {
    let current = node.head
    while(current && k > 0) {
      current = current.next
      k -= 1
    }

    return current
  }

  storeReferences(ll) {
    let current = ll.head
    let references = new Set()

    while(current.next) {
      references.add(current)
      current = current.next
    }
    return references
  }

  intersection_JS(ll1, ll2) {
    let storedRef = this.storeReferences(ll1)
    
    let current = ll2.head
    while(current) {
      if(storedRef.has(current)) {
        return true
      }

      current = current.next
    }

    return true
  }

  intersection(ll1, ll2) {
    const {
      length: lengthA,
      tail: tailA,
    } = this.getLengthsAndTail(ll1)

    const {
      length: lengthB,
      tail: tailB,
    } = this.getLengthsAndTail(ll2)

    //check if tails match
    if(tailA !== tailB) return
    
    //set pointers to start of each linked list
    let shorter = lengthA < lengthB ? ll1 : ll2
    let longer = lengthA < lengthB ? ll2: ll1

    longer = this.getKthNode(longer, Math.abs(lengthA - lengthB))

    while(shorter !== longer) {
      shorter = shorter.next
      longer = longer.next
    }
    
    return longer
  }
}


function main() {
  let ll = new LinkedList()
}

main()