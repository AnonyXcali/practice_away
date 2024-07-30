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
    return this.stack.length === 0
  }
}

function main() {
  let stack = new Stack()
  stack.push(1)
  stack.push(2)
  console.log(stack.peek())
}

main()