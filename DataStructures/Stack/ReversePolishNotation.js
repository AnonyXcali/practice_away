function reversePolishNotation(tokens) {
  //stack to store state
  let stack = []
  let operator = ["+", "-", "/", "*"]

  for(let i = 0; i < tokens.length; i += 1) {
    console.log(stack)
    if(operator.includes(tokens[i])) {
      if(stack.length) {
        let operandA = stack.pop()
        let operandB = stack.pop()
        let result = helper(operandB, operandA, tokens[i])
        stack.push(result)
      }
    } else {
      stack.push(parseInt(tokens[i], 10))
    }
  }

  
  return stack[0]
}

function helper(a, b, operation){
  switch(operation) {
    case "+":
      return a + b
    case "-":
      return a - b
    case "*":
      return a * b
    case "/":
      return Math.ceil(a / b)
    default:
      return 0
  }
}

let ans = reversePolishNotation(["50", "3", "17", "+", "2", "-", "/"])
console.log(ans)