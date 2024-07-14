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

function threeNumberSum(arr, target) {
  arr = mergeSort(arr) // o(n * logn)
  let pointerLeft = 0
  let pointerRight = 0
  let result = []

  for(let index = 0; index < arr.length; index++) { // o(n)
    pointerLeft = index + 1
    pointerRight = arr.length - 1
    while(pointerLeft < pointerRight) { //o(n)
      let currentSum = arr[index] + arr[pointerLeft] + arr[pointerRight]
      if(currentSum === target) {
        result.push([arr[index], arr[pointerLeft], arr[pointerRight]])
        pointerLeft += 1
        pointerRight -= 1
      } else if(currentSum > target) {
        pointerRight -= 1
      } else {
        pointerLeft += 1
      }
    }
  }

  return result //o(n)^2
}

let arr = [12, 3, 1, 2, -6, 5, -8, 6]
let target = 0
console.log(threeNumberSum(arr, target).toString())