function nextGreaterElement(array) {
  //initialize resultant array of same length
  let resultant = new Array(array.length).fill(-1)
 
  //initialize stack to hold indices
  let stack = []

  let pointer = array.length * 2

  while(pointer >= 0) {
    let currentIndex = pointer % array.length

    if(stack.length && stack[stack.length - 1] <= array[currentIndex]) {
      stack.pop()
    }

    if(stack[stack.length - 1] > array[currentIndex]) {
      resultant[currentIndex] = stack[stack.length - 1]
    }

    stack.push(array[currentIndex])

    pointer -= 1
  }
 
  return resultant
 }
 
 let ans = nextGreaterElement([2,5,-3,-4,6,7,2])
 console.log(ans)