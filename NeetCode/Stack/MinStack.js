/**
 * Q: Min Stack
 * Design a stack class that supports the push, pop, top, and getMin operations.
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 * Each function should run in O(1) time.
 */


class Stack {
  constructor() {
    this.stack = []
    this.minStack = []
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val)
    if(this.minStack.length === 0 || val < this.getMin()) {
      this.minStack.push(val)
    }
  }

  /**
   * @return {void}
   */
  pop() {
    let popped = this.stack.pop()
    if(popped === this.getMin()) {
      this.minStack.pop()
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1]
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1]
  }

  getMin_ms() {
    let temp = [...this.stack]

    const mergeSort = (arr) => {
      if(arr.length < 2) return arr
      let mid = Math.floor(arr.length / 2)
      let leftSplit = arr.slice(0, mid)
      let rightSplit = arr.slice(mid, arr.length)

      return merge(mergeSort(leftSplit), mergeSort(rightSplit))
    }

    const merge = (leftArray, rightArray) => {
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

    return mergeSort(temp)[0]
  }
}

function main() {
  let stack = new Stack()
  stack.push(100)
  stack.push(2)
  stack.push(32)
  stack.push(42)
  stack.push(-22)
  stack.push(-242)
  stack.push(221)

  let answer = stack.getMin() //-242
  console.log(answer)
}

main()