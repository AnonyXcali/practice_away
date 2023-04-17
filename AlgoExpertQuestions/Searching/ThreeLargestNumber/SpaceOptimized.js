function findThreesmallestNumbers(arr) {
  let smallestNum = Number.MIN_SAFE_INTEGER
  let first = 0
  let second = 0
  let third = 0
  let result = []
  
  for(let index = 0; index < arr.length; index += 1) {
    if(arr[index] > smallestNum) {
      smallestNum = arr[index]
      first = index
    }
  }

  smallestNum = Number.MIN_SAFE_INTEGER

  
  for(let index = 0; index < arr.length; index += 1) {
    if(arr[index] > smallestNum && index !== first) {
      smallestNum = arr[index]
      second = index
    }
  }

  smallestNum = Number.MIN_SAFE_INTEGER

  for(let index = 0; index < arr.length; index += 1) {
    if(arr[index] > smallestNum && index !== first && index !== second) {
      smallestNum = arr[index]
      third = index
    }
  }

  result = [arr[third], arr[second], arr[first]]

  return result
}


const arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
const arr2 = [10, 5, 9, 10, 12]
const arr3 = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
console.log(findThreesmallestNumbers(arr2))