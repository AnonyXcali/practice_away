function firstDuplicateValue(array) {
  // Write your code here.
  //debugger
  let pointer = 0
  let minIndex = -1
  let trail = pointer + 1

  while(pointer < array.length) {
    if(array[pointer] === array[trail]){
      if(trail < minIndex && minIndex !== -1) {
        minIndex = trail
      } else if(minIndex === -1) {
        minIndex = trail
      }
      pointer += 1
      trail = pointer + 1
    } else if(trail > array.length) {
      pointer += 1
      trail = pointer + 1
    } else {
      trail += 1
    }
  }

  const valueAtMin = array[minIndex]
  const initialLocationInArray = array.indexOf(valueAtMin)
  return array[initialLocationInArray]
}

const arr = [2, 1, 5, 3, 3, 2, 4]
const arr2 =  [15, 2, 6, 3, 3, 22, 14, 16, 6, 21, 4, 16, 2, 17, 9, 13, 1, 3, 5, 6, 1, 2, 23, 16, 16]
let ans = firstDuplicateValue(arr2)
console.log(ans)

/**
 [2, 1, 5, 2, 3, 3, 4]
 [1, 5, 2, 3, 3, 4]
 [5, 2, 3, 3, 4]
 [2, 3, 3, 4]
 [3, 3, 4]
 */