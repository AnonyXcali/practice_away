/**
 * Q)2.4
 * Partition: Write code to partition a linked list around a value x, such that all
 * nodes less than x come before all nodes greater than equal to x. If x is contained
 * within the list, the values of x only needs to be after the elements less that x
 * The partition element X can appear anywhere in the "right partition"; It does not need
 * to appear between the left and right partitions.
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
    this.partitionValue = null
    this.xValue = null
    this.leftPartition = []
    this.rightPartition = []
    this.containedValueOfX = []
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

  count() {
    return this.length
  }

  createLeftPartition(ll) {
    let currentPartValue = this.partitionValue
    let current = ll.head

    while(current) {
      if(current.value < currentPartValue && current.value !== this.xValue) {
        this.leftPartition.push(current.value)
      }

      if(current.value === this.xValue) {
        this.containedValueOfX.push(current.value)
      }

      current = current.next
    }
  
  }

  createRightPartition(ll) {
    let currentPartValue = this.partitionValue
    let current = ll.head

    while(current) {
      if(current.value >= currentPartValue && current.value !== this.xValue) {
        this.rightPartition.push(current.value)
      }

      if(ll.value === this.xValue) {
        this.containedValueOfX.push(current.value)
      }
      current = current.next
    }
  }

  join(){ 
    //construct the new linked list

    //Add the smaller than parition values
    for(let i = 0; i < this.leftPartition.length; i += 1) {
      this.add(this.leftPartition[i])
    }
    
    //Add the mid partition value
    this.add(this.partitionValue)

    //Add the if X contained in LL value to new LL
    for(let i = 0; i < this.containedValueOfX.length; i += 1) {
      this.add(this.containedValueOfX[i])
    }

    //Add the greater than parition values
    for(let i = 0;i < this.rightPartition.length; i += 1) {
      this.add(this.rightPartition[i])
    }


    this.reset()
    return this.head
  }

  reset() {
    this.leftPartition = []
    this.rightPartition = []
    this.containedValueOfX = []
    this.xValue = null
    this.partitionValue = null
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

  getCount(ll) {
    const start = ll.head
    const length = 0
    while(start) {
      length += 1
      start = start.next
    }
    return length
  }
  
  getValueAtPartition(pos, ll){
    let start = ll.head
    let currPos = 1
    while(start) {
      if(currPos + 1 === pos && start.next) {
        return start.next.value
      }
      start = start.next
      currPos += 1
    }
    return null
  }

  partition_naive(ll, partitionAt) {
    this.partitionValue = this.getValueAtPartition(partitionAt, ll)
    this.xValue = partitionAt
    //create left partition
    this.createLeftPartition(ll)

    //create right partition
    this.createRightPartition(ll)

    this.join()

    return this.printLinkedList()
  }

  partition_optimized(x) {
    let beforeStart = null
    let beforeEnd = null
    let afterStart = null
    let afterEnd = null
    let current = this.head
    while(current) {
      let next = current.next
      if(current.value < x) {
        if(!beforeStart) {
          beforeStart = current
          beforeEnd = beforeStart
        } else {
          beforeEnd.next = current
          beforeEnd = current
        }
      } else {
        if(!afterStart) {
          afterStart = current
          afterEnd = afterStart
        } else {
          afterEnd.next = current
          afterEnd = current
        }
      }
      current = next
    }

    if (!beforeStart) {
      this.head = afterStart;
    } else {
      beforeEnd.next = afterStart;
      this.head = beforeStart;
    }

    if(afterEnd) {
      afterEnd.next = null
    }

    return this.printLinkedList()
  }

}




function main() {
  let inputLL = new LinkedList()
  inputLL.add(3)
  inputLL.add(5)
  inputLL.add(8)
  inputLL.add(5)
  inputLL.add(10)
  inputLL.add(2)
  inputLL.add(1)

  console.log(inputLL.partition_optimized(5))
}

main()