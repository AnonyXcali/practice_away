/*PRACTICE DAILY*/
/**
 * 1x Binary Search
 * 1x Merge Sort
 */


function mergeSort(arr) {
  if(arr.length < 2) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const leftArray = arr.slice(0, mid)
  const rightArray = arr.slice(mid, arr.length)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray) {
  let leftPointer = 0
  let rightPointer = 0
  let results = []

  while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
    if(leftArray[leftPointer] < rightArray[rightPointer]) {
      results.push(leftArray[leftPointer])
      leftPointer += 1
    } else {
      results.push(rightArray[rightPointer])
      rightPointer += 1
    }
  }

  return results.concat(leftArray.slice(leftPointer).concat(rightArray.slice(rightPointer)))
}


class MergeSort {
  mergeSort(arr) {
    if(arr.length < 2) return arr

    let mid = Math.floor(arr.length / 2)
    let leftArray = arr.slice(0, mid)
    let rightArray = arr.slice(mid, arr.length)

    return this.merge(this.mergeSort(leftArray), this.mergeSort(rightArray))
  }

  merge(leftArray, rightArray) {
    let leftPointer = 0
    let rightPointer = 0
    let resultant = []

    while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
      if(leftArray[leftPointer] < rightArray[rightPointer]) {
        resultant.push(leftArray[leftPointer])
        leftPointer += 1
      } else {
        resultant.push(rightArray[rightPointer])
        rightPointer += 1
      }
    }

    return resultant.concat(leftArray.slice(leftPointer).concat(rightArray.slice(rightPointer)))
  }
}

class BinarySearch {
  binarySearch(arr, target, left, right) {
    if(arr.length < 2) {
      if(arr[0] === target) return "Element found at 0"

      return "Element doesn't exits"
    }

    let mid = Math.floor((left + right) / 2)

    if(arr[mid] === target) return `Element found at ${mid}`

    if(target > arr[mid]) {
      return this.binarySearch(arr, target, mid + 1, right)
    } else {
      return this.binarySearch(arr, target, left, mid - 1)
    }
  }
}

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
    let node = new Node(value)
    let current = this.head

    if(!current) {
      this.head = node
    } else {
      while(current.next) {
        current = current.next
      }
      current.next = node
      this.length += 1
    }
  }

  remove(target) {
    if(!this.head) return "Linked List is empty."
    let current = this.head
    while(current.next) {
      let nextValue = current.next.value
      if(target === nextValue) {
        current.next = current.next.next
        this.length -= 1
        return this.head
      }
      current = current.next
    }
  }

  print() {
    let current = this.head
    while(current) {
      console.log(current.value)
      current = current.next
    }
  }
}


function main() {
  let array = [22, 11, 100, 1000, 29, 21, 1, 55, 12]
  const ms = new MergeSort()
  const bs = new BinarySearch()
  let sorted = ms.mergeSort(array)
  console.log("Sorted ==>", sorted)
  console.log(bs.binarySearch(sorted, 29, 0, sorted.length))
  
  // let ll = new LinkedList()
  // for(let i = 0; i < sorted.length; i+=1) {
  //   ll.add(sorted[i])
  // }

  // console.log("=======")
  // ll.print()
  // ll.remove(1000)
  // console.log("=======")
  // ll.print()
  // ll.add(1000)
  // console.log("=======")
  // ll.print()
}

main()