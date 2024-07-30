/**
 * Evaluate Reverse Polish Notation
 * You are given an array of strings tokens that represents a 
 * valid arithmetic expression in Reverse Polish Notation.
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

  peek() {
    return this.stack[this.stack.length - 1]
  }

  isEmpty() {
    return this.stackLength() <= 0
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  stackLength() {
    return this.stack.length
  }
}

class Solution {
  evalRPN(tokens) {
    let stack = new Stack()
    let operandSet = new Set()
    operandSet.add("+")
    operandSet.add("-")
    operandSet.add("/")
    operandSet.add("*")
    
    for(let token of tokens) {
      if(operandSet.has(token)) {
        //perform the math
        let B = parseInt(stack.pop(), 10)
        let A = parseInt(stack.pop(), 10)

        switch(token) {
          case "+":
            let sum = this.add(A, B)
            stack.push(sum)
            break
          case "-":
            let subtracted = this.subtract(A, B)
            stack.push(subtracted)
            break
          case "/":
            let divided = this.divide(A, B)
            stack.push(Math.floor(divided))
            break
          case "*":
            let multiplied = this.multiply(A, B)
            stack.push(multiplied)
            break
          default:
            console.log("ERROR: Please check input", token)
            break
        }
      } else {
        stack.push(token)
      }
    }
    return stack.top()
  }

  multiply(a, b) {
    return a * b
  }

  add(a, b) {
    return a + b
  }

  subtract(a, b) {
    return a - b
  }

  divide(a, b) {
   return Math.trunc(a / b)
  }
}

function main() {
  let sol = new Solution()
  let ans = sol.evalRPN(["1","2","+","3","*","4","-"])
  console.log(ans)
}

main()