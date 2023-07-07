function nextGreaterElement(array) {
 //initialize resultant array of same length
 let resultant = new Array(array.length).fill(-1)

 //initialize stack to hold indices
 let stack = []

 for(let i = 0; i < array.length * 2; i += 1) {
  let currentIndex = i % array.length

  while(stack.length > 0 && array[stack[stack.length - 1]] < array[currentIndex]) {
    let idx = stack.pop()
    resultant[idx] = array[currentIndex]
  }

  stack.push(currentIndex)
  }

 return resultant
}

nextGreaterElement([2,5,-3,-4,6,7,2])