function hasSingleCycle(array) {
  // Write your code here.
  let visited = 0
  let pointer = 0

  while(visited < array.length) {
    if(visited > 0 && pointer === 0) {
      return false
    }

    visited += 1
    pointer = (pointer + array[pointer]) % array.length
    if(pointer < 0) {
      pointer += array.length
    }
  }

  return pointer === 0
}


const val = hasSingleCycle([2, 2, -1])
console.log(val)