/**
 * Q) 2.2
 * Return Kth to Last
 * Implement an algorithm to find the kth to last element of a singly linked
 * list
 * 
 * Follow up
 * How would you solve this problem if a temporary buffer is
 * not allowed?
 */

class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}
  
class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  /**
   * 
   * @param {*} value
   * This function handles the addition
   * of node into the linked list 
   */
  add(value) {
    const node = new Node(value)

    if(!this.head) {
      this.head = node
      this.length += 1
    } else {
      let curr = this.head

      while(curr.next) {
        curr = curr.next
      }

      curr.next = node
      this.length += 1
    }
  }

  /**
   * 
   * @param {*} element 
   * @returns Linked List
   * This function is responsible for remove element based
   * on Value.
   */
  remove(element) {
    //check if head exists
    let current = this.head

    if(current) {
      //check if head is the value that needs to be removed
      if(current.value === element) {
        this.head = current.next
        this.length -= 1
        return this.head
      }

      //iterate over linked list and remove and return
      //updated linked list

      while(curr) {
        if(curr.next && curr.next.value === element) {
          curr.next = curr.next.next
          this.length -= 1
          return this.head
        }

        curr = curr.next
      }
      return this.head

    } else {
      return this.head
    }
  }

  /**
   * 
   * @param {*} k 
   * @returns Linked List
   * This function removes node at given postion
   */
  removeAtPos(k) {
    if(!this.head) return null

    let curr = this.head
    let currentIndexCount = 0

    while(curr) {
      if(curr.next && currentIndexCount + 1 === k) {
        curr.next = curr.next.next
        return this.head
      }
      curr = curr.next
      currentIndexCount += 1
    }

    return this.head
  }

  insert(ele, k) {
    const node = new Node(ele)

    //if head is null, node will be added at head
    if(!this.head) {
      this.add(ele)
      return this.head
    } else {

      if (k === 0) {
        node.next = this.head;
        this.head = node;
        this.length += 1;
        return this.head;
      }

      let curr = this.head
      let pos = 0

      while(curr) {
        if(pos + 1 === k) {
          let temp = curr.next
          curr.next = node
          node.next = temp
          this.length += 1
          return this.head
        }
        curr = curr.next
        pos += 1
      }

      //add to the last
      this.add(ele)
    }

    return this.head
  }

  /**
   * 
   * @returns Linked list's length
   */
  count() {
    return this.length
  }

  print() {
    let current = this.head
    while(current) {
        console.log(current.value)
        current = current.next
    }
  }

  removeDuplicates() {
    let set = new Set()
    let current = this.head

    if(!current) {
      return "No elements in linked list"
    } else {
      while(current && current.next) {
        let nextValue = current.next.value
        if(set.has(nextValue)) {
          current.next = current.next.next
          this.length -= 1
        } else {
          set.add(nextValue)
        }
        set.add(current.value)
        current = current.next
      }
      
      return this.head
    }
  }

  withoutTemporaryBufferRemoveDuplicates() {
    let current = this.head
    let runner = null

    while(current) {
      runner = current
      while(runner.next) {
        if(runner.next.value === current.value) {
          runner.next = runner.next.next
          this.length -= 1
        } else {
          runner = runner.next
        }
      }
      current = current.next
    }
  }
}
  
  
function main() {
  const ll = new LinkedList()
}
  
main()