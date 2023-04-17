function mergeSort(array) {
  if(array.length < 2) return array

  let mid = Math.floor(array.length / 2)
  let leftArray = array.slice(0, mid)
  let rightArray = array.slice(mid, array.length)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray) {
  let leftPointer = 0
  let rightPointer = 0
  let result = []

  while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
    if(leftArray[leftPointer][0] < rightArray[rightPointer][0]) {
      result.push(leftArray[leftPointer])
      leftPointer += 1
    } else {
      result.push(rightArray[rightPointer])
      rightPointer += 1
    }
  }

  return result.concat(leftArray.slice(leftPointer).concat(rightArray.slice(rightPointer)))
}

function mergeOverlappingIntervals(array) {

  array = mergeSort(array)
  console.log(array.toString())
  let result = []

  result.push(array[0])
  
  for(let index = 1; index < array.length ; index++) {
    if(array[index][0] < result[result.length - 1][1]){
      let temp = []
      temp[0] = result[result.length - 1][0]
      temp[1] = Math.max(result[result.length -1][1], array[index][1])
      result[result.length - 1] = temp
    } else {
      result.push(array[index])
    }
  }

  return result
}

const testCase = [
  [89, 90],
  [-10, 20],
  [-50, 0],
  [70, 90],
  [90, 91],
  [90, 95]
]
let ans = mergeOverlappingIntervals(testCase)
console.log(ans.toString())