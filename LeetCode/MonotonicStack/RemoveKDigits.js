/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let stack = []

  for(let i = 0; i < num.length; i += 1) {
    while(stack.length && parseInt(stack[stack.length - 1], 10) > num.charAt(i) && k > 0) {
      stack.pop()
      k -= 1
    }
    stack.push(num.charAt(i))
  }
  

  if(k > 0) {
    while(k > 0) {
      stack.pop()
      k -= 1
    }

    if(stack.length === 0) return "0"
  }

  let pointer = 0

  while(parseInt(stack[pointer]) === 0) {
    stack.shift()
  }

  return stack.length > 0 ? stack.join("") : "0"
};