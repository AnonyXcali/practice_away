/**
 * Q: Validate Parentheses
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

  stackLength() {
    return this.stack.length
  }
}

class Solution {
  validate(str) {
    const openBracketMap = {
      "(" : ")",
      "{" : "}",
      "[" : "]",
    }

    const stack = new Stack()

    for(let i = 0; i < str.length; i += 1) {
      let curr = str.charAt(i)
      const isOpenBracket = openBracketMap[curr]
      const isStackEmpty = stack.stackLength() <= 0

      if(isStackEmpty || isOpenBracket) {
        stack.push(curr)
      } else {
        if (stack.isEmpty() || openBracketMap[stack.pop()] !== curr) {
          return false;
        }
      }
    }

    //if false then its not a valid parentheses
    return stack.stackLength() <= 0
  }
}

function main() {
  let sol = new Solution()
  let answer = sol.validate("{}")
  let answer2 = sol.validate("{()}")
  let answer3 = sol.validate("[(})]")
  let answer4 = sol.validate("))")

  //false, false, true
  console.log(answer, answer2, answer3, answer4)
}

main()