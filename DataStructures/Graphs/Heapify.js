class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // Write your code here.
    const parentIndex = Math.floor((array.length - 2) / 2)
    for(let index = parentIndex; index > -1; index -=1 ) {
      this.siftDown(index, array)
    }
    return array
  }

  siftDown(index, arr) {
    // Write your code here.
    let childOneIdx = (index * 2) + 1 //check left child
    let lastIndex = arr.length - 1 //store last index

    while(childOneIdx <= lastIndex) { //we keep sifting to left || traverse until we are less or equal to last index
      let indexToSwap = null // initialize to null
      let childTwoIdx = (index * 2) + 2 <= lastIndex ? (index * 2) + 2 : -1 // check if child 2 is last index else mark it -1
      if(childTwoIdx !== -1 && arr[childTwoIdx] < arr[childOneIdx]) { //check the smaller
        indexToSwap = childTwoIdx // if child 2 is smaller it has to be swapped
      } else {
        indexToSwap = childOneIdx // if child 1 is smaller it has to be swapped
      }

      if(arr[index] > arr[indexToSwap]) { //check if the current element requires to be swapped
        this.swap(index, indexToSwap, arr)
        index = indexToSwap // update the index to where it was swapped
        childOneIdx = (index * 2) + 1 // update its left child index
      } else {
        return
      }
    }
  }

  siftUp(index, arr) {
    // Write your code here.
    let parentIdx = Math.floor((index - 1) / 2)

    while(index > 0 && arr[parentIdx] > arr[index]) {
      this.swap(index, parentIdx, arr)
      index = parentIdx
      parentIdx = Math.floor((index - 1) / 2)
    }
  }

  peek() {
    // Write your code here.
    console.log("this heap", this.heap)
    return this.heap[0]
  }

  remove() {
    // Write your code here.
    const lastElement = this.heap.length - 1
    this.swap(0, lastElement, this.heap)
    const elementToBeRemoved = this.heap.pop()
    this.siftDown(0, this.heap)
    return elementToBeRemoved
  }

  insert(value) {
    // Write your code here.
    this.heap.push(value)
    let currentIndex = this.heap.length - 1
    this.siftUp(currentIndex, this.heap)
  }

  swap(index1, index2, arr) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
  }

  showHeap() {
    return this.heap
  }
}

const minHeapArray = new MinHeap([3, 2, 1, 2, 6])
console.log(minHeapArray.showHeap())
//[1,2,3,2,6]
//0 + 1 + 3 + 6 + 8 = 18