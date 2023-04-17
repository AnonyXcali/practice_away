class Heap {
  constructor(arr) {
     this.minHeap = this.buildArray(arr)
  }

  buildArray(array) {
    //get the last parent indx
    let startParentIndex = Math.floor((array.length - 1 / 2))
    for(let index = startParentIndex; index > -1; index -= 1) {
      this.siftDown(index, array)
    }

    return array
  }



  siftUp(index, arr) {
    let parentIdx = Math.floor((index - 1) / 2)

    while(index > 0 && arr[index] < arr[parentIdx]) {
      this.swap(index, parentIdx, arr)
      index = parentIdx
      parentIdx = Math.floor((index - 1) / 2)
    }
  }

  siftDown(index, arr) {
    let childOneIndex = (2 * index) + 1
    let lastIndex = arr.length - 1

    while(childOneIndex <= lastIndex) {
      let indexToBeSwapped = null
      let childTwoIndex = ((2 * index) + 2) <= lastIndex ? ((2 * index) + 2) : -1

      if(childTwoIndex !== -1 && arr[childOneIndex] > arr[childTwoIndex]) {
        indexToBeSwapped = childTwoIndex
      } else {
        indexToBeSwapped = childOneIndex
      }

      //now we check if the index to be swapped actually requires to be swapped
      if(arr[index] > arr[indexToBeSwapped]) {
        this.swap(index, indexToBeSwapped, arr)
        index = indexToBeSwapped
        childOneIndex = (2 * index) + 1
      } else {
        return
      }
    }
  }

  insert(element) {
     //push element to array
     this.minHeap.push(element)
     let startIndex = this.minHeap.length - 1
     this.siftUp(startIndex, this.minHeap)
  }

  delete() {
     let lastElementIndex = this.minHeap.length - 1
     this.swap(0, lastElementIndex, this.minHeap)
     let popped = this.minHeap.pop()
     this.siftDown(0, this.minHeap)
     return popped
  }

  swap(indexFrom, indexTo, arr) {
    [arr[indexFrom], arr[indexTo]] = [arr[indexTo], arr[indexFrom]]
  }

  showHeap() {
    return this.minHeap
  }
}

const minHeapArray = new Heap([30, 102, 23, 17, 18, 9, 44, 12, 31])
console.log(minHeapArray.showHeap())