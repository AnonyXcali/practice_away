//Special Case - https://medium.com/swlh/binary-search-find-upper-and-lower-bound-3f07867d81fb

/*SHORTENED
function BinarySearch(arr, target, midPoint) {
  if(arr.length < 2 && arr[0] !== target) {
    return false
  } else if(arr[midPoint] === target || (arr.length < 2 && arr[0] === target)) {
    return true
  }

  if(target > arr[midPoint]) {
    return BinarySearch(arr.slice(midPoint, arr.length), target, midPoint + 1)
  } else {
    return BinarySearch(arr.slice(0, midPoint), target, midPoint - 1)
  }
}
*/

function BinarySearch(arr, target) {
  if(arr.length < 2) {
     if(arr[0] === target) {
        return 0
     }
     return -1
  }

  let leftIndex = 0
  let rightIndex = arr.length
  let midIndex = Math.floor(Math.abs(leftIndex + rightIndex) / 2)
  let leftArray = arr.slice(leftIndex, midIndex)
  let rightArray = arr.slice(midIndex, rightIndex)

  if(arr[midIndex] === target) {
    return midIndex
  }

  if(target > arr[midIndex]) {
    return BinarySearch(rightArray, target)
  } else {
    return BinarySearch(leftArray, target)
  }
  
}

function BinarySearchIterative(arr, target) {
  let leftPointer = 0
  let rightPointer = arr.length

  while(leftPointer < rightPointer) {
    let mid = Math.ceil((leftPointer + rightPointer) / 2)
    if(arr[mid] === target) {
      return mid
    }

    if(arr[mid] > target) {
      rightPointer = mid - 1
    } else {
      leftPointer = mid + 1
    }
  }
  return -1
}

const arrayToSearchIn = [1, 5, 23, 111]
const target = 5
const mid = 0
let answer = BinarySearchIterative(arrayToSearchIn, target)
console.log(answer)

