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
    //create an array with position and its current speed and sort it with farthest to nearest
    let sortedDescending = position.map((pos, i) => [pos, speed[i]]).sort((a, b) => b[0] - a[0])

    //now map them based on time formula for given remaining distance and speed
    let time = sortedDescending.map(([pos, speed]) => (target - pos) / speed)

    //create a new stack
    let stack = new Stack()
     
    //iterate over the time array and add to stock
    //if stack is empty add to stack or if the stack's top time is smaller than current time
    //add to stack
    //we are create a monotonic stack which is increasing in order w.r.t to time
    for(let t of time) {
      if(stack.getLength() === 0 || t > stack.top()) {
        stack.push(t)
      }
    }

    //each new element means a new fleet, with growing
    //number of fleet the length of stack would increase.
    //return the number of fleets which means returning
    //the stack's length.
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