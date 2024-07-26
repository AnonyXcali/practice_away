/**
 * Q)2.5
 * Sum Lists: You have two numbers represented by a linked list, where each node
 * contains a single digit. The digits are stored in reverse order, such that the
 * 1's digit is at the head of the list. Write a function that adds the two numbers
 * and returs the sum as linked list.
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
  
    return this.printLinkedList()
  }
}

class Solution {

  getUnit(sum) {
    return sum % 10;
  }

  getCarryOver(sum) {
    return Math.floor(sum / 10);
  }

  sum(ll1, ll2) {
    const summed = new LinkedList()
    let carryOver = 0
    
    let llOneCurrent = ll1.head
    let llTwoCurrent = ll2.head

    while(llOneCurrent || llTwoCurrent) {
      let addition = (llOneCurrent?.value || 0) + (llTwoCurrent?.value || 0) + (carryOver || 0)
      carryOver = this.getCarryOver(addition)
      llOneCurrent = llOneCurrent?.next || null
      llTwoCurrent = llTwoCurrent?.next || null
      summed.add(this.getUnit(addition))
    }

    return summed.printLinkedList()
  }
}


function main() {
  let linkedListOne = new LinkedList()
  linkedListOne.add(0)
  linkedListOne.add(0)
  linkedListOne.add(0)
  linkedListOne.add(1)
  
  let linkedListTwo = new LinkedList()
  linkedListTwo.add(1)

  let sol = new Solution()
  const answer = sol.sum(linkedListOne, linkedListTwo)
  console.log(answer)
}

main()