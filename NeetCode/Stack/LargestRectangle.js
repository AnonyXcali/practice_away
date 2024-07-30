/**
 * Q: Largest Rectangle In Histogram
 * You are given an array of integers heights where heights[i] 
 * represents the height of a bar. The width of each bar is 1.
 * Return the area of the largest rectangle that can be formed among the bars
 */

class Stack {
  constructor() {
    this.stack = []
  }

  push(ele) {
    this.stack.push(ele)
  }

  pop() {
    return this.stack.pop()
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getLength() {
    return this.stack.length
  }
}

class Solution {
  largestRectangularInHistogram(bars) {
    let maxArea = Number.NEGATIVE_INFINITY
    let stack = new Stack()
    let index = 0

    while(index < bars.length) {
      if(stack.getLength() === 0 || bars[index] >= bars[stack.top()]) {
        stack.push(index)
        index += 1
      } else {
        //Calculate the width as the difference between the current index and the new top of the stack’s index minus one.
        let popped = stack.pop()
        let area = bars[popped] * (stack.getLength() === 0 ? index : index - stack.top() - 1);
        maxArea = Math.max(maxArea, area)
      }
    }

    while (stack.getLength() > 0) {
      let topOfStack = stack.pop();
      let area = bars[topOfStack] * (stack.getLength() === 0 ? index : index - stack.top() - 1);
      maxArea = Math.max(maxArea, area);
    }

    return maxArea
  }
}

function main() {
  let sol = new Solution()
  let test = [7,1,7,2,2,4]
  let test2 = [2,1,5,6,2,3]
  let answer = sol.largestRectangularInHistogram(test2)
  console.log(answer)
}

main()