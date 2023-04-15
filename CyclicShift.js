function cyclicShift(arr, shift, currPointer, endPointer) {
  if(endPointer === currPointer) {
    return arr
  }
  let count = 0
  let ptr = currPointer
  let prev = arr[endPointer]
  while(count < shift) {
     let temp = arr[ptr]
     arr[ptr] = prev
     arr[arr.length -1] = temp
     prev = arr[arr.length -1]
     ptr += 1

    if(ptr >= endPointer) {
      ptr = 0
      count += 1
    }
  }

  return arr
}

let array = [4,7,9,12]
let shifted = cyclicShift(array, 1, 0, 1)
console.log(shifted)