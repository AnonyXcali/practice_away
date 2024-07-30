/**
 * Daily Temperatures
 * You are given an array of integers temperatures where temperatures[i] 
 * represents the daily temperatures on the ith day.
 * 
 * Return an array result where result[i] is the number of days 
 * after the ith day before a warmer temperature appears on a future day. 
 * If there is no day in the future where a warmer temperature will appear for the 
 * ith day, set result[i] to 0 instead
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

  clear() {
    this.stack = []
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getLength() {
    return this.stack.length
  }

  print() {
    console.log(this.stack)
    return ""
  }
}

class Solution {
  dailyTemperatures(temperatures) {
    let stack = new Stack()
    let result = []

    for(let i = 0; i < temperatures.length; i += 1) {
      if(i === temperatures.length - 1) {
        result.push(0)
        return result
      }
      stack.clear()
      stack.push(temperatures[i])
      let count = 0
      let runner = i + 1

      while(runner < temperatures.length) {
        stack.push(temperatures[runner])
        if(stack.top() > temperatures[i]) {
          //start popping
          while(stack.getLength() !== 1) {
            let popped = stack.pop()
            console.log(popped)
            count += 1
          }
          result.push(count)
          runner += 1
          break
        } else {
          runner += 1
          if(runner >= temperatures.length) {
            result.push(0)
          }
        }
      }
    }
  }

  dailyTemperatures_optimized(temperatures) {
    let stack = new Stack()
    let recorded = new Array(temperatures.length).fill(0)

    for(let i = temperatures.length - 1; i >= 0; i -= 1) {
      while(stack.getLength() > 0 && temperatures[i] >= temperatures[stack.top()]) {
        stack.pop()
      }

      if(stack.getLength() > 0) {
        recorded[i] = stack.top() - i
      }

      stack.push(i)
    }

    return recorded
  }
}

function main() {
  let test = [30,38,30,36,35,40,28]
  let test1 = [22,21,20]
  let sol = new Solution()
  let ans = sol.dailyTemperatures_optimized(test)
  console.log(ans)
}

main()