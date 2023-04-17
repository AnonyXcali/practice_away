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

function fourNumberSum(arr, target) {
  let leftPointer, rightPointer
  let result = [] // o(n) space
  
  for(let index = 0; index < arr.length; index++) {
    for(let jIndex = index + 1; jIndex < arr.length; jIndex++){
      leftPointer = jIndex + 1
      rightPointer = arr.length - 1
      while(leftPointer < array.length) {
        let calc = arr[index] + arr[jIndex] + arr[leftPointer] + arr[rightPointer]
        console.log(`[${arr[index]},${arr[jIndex]},${arr[leftPointer]},${arr[rightPointer]}]`)
        if(calc === target) {
          result.push([arr[index], arr[jIndex], arr[leftPointer], arr[rightPointer]])
          leftPointer += 1
          rightPointer -= 1
        } else if(calc > target) {
          rightPointer -= 1
        } else {
          leftPointer += 1
        }
      }
    }
  }

  return result
}

let array = [7, 6, 4, -1, 1, 2]
let target = 16
console.log(fourNumberSum(array, target).toString())

