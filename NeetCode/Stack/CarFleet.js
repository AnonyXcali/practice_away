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
  carFleet(target, position, speed) {
    let sortedDescending = position.map((pos, i) => [pos, speed[i]]).sort((a, b) => b[0] - a[0])
    let time = sortedDescending.map(([pos, speed]) => (target - pos) / speed)
    let stack = new Stack()
     
    for(let t of time) {
      if(stack.getLength() === 0 || t > stack.top()) {
        stack.push(t)
      }
    }

    return stack.getLength()
  }
}

function main() {
  let solution = new Solution()
  let target = 10
  let position = [1, 4]
  let speed = [3, 2]
  let answer = solution.carFleet(target, position, speed)
  console.log(answer)
}

main()