function mergeSort(array) {
  if(array.length < 2) return array

  let mid = Math.floor(array.length / 2)
  let leftArray = array.slice(0 , mid)
  let rightArray = array.slice(mid, array.length)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray) {
  let leftPointer = 0
  let rightPointer = 0
  let result = []

  while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
    if(leftArray[leftPointer] < rightArray[rightPointer]) {
      result.push(leftArray[leftPointer])
      leftPointer += 1
    } else {
      result.push(rightArray[rightPointer])
      rightPointer += 1
    }
  }

  return result.concat(
    leftArray.slice(leftPointer)
    .concat(rightArray.slice(rightPointer)))
}

function twoNumberSum(array, target) {
  let leftPointer = 0
  let rightPointer = array.length - 1

  array = mergeSort(array)

  while(leftPointer < rightPointer) {
    let calc = array[leftPointer] + array[rightPointer]
    if(calc === target) return [array[leftPointer], array[rightPointer]]
    if(calc > target) {
      rightPointer -= 1
    } else {
      leftPointer += 1
    }
  }

  return []
}

const arr = [3, 5, -4, 8, 11, 1, -1, 6]
const target = 10
let ans = twoNumberSum(arr, 10)
console.log(ans)