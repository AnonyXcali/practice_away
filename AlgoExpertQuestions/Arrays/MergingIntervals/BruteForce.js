function mergeSort(array) {
  if(array.length < 2) {
    return array
  }

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
    if(leftArray[leftPointer][0] <  rightArray[rightPointer][0]){
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
  // Write your code here.
  //debugger
  // if(array.length < 2) {
  //   return array
  // }

  array = mergeSort(array)

  let pointerOne = 0
  let pointerTwo = 1

  while(pointerOne < array.length && pointerTwo < array.length) {
    let temp = []
    if(array[pointerTwo][0] <= array[pointerOne][1]) {
      if(false && array[pointerTwo][0] < array[pointerOne][0]) {
        temp[0] = array[pointerTwo][0]
        if(array[pointerTwo][1] < array[pointerOne][1]) {
          temp[1] = array[pointerOne][1]
        } else {
           temp[1] = array[pointerTwo][1]
        }
      } else if(array[pointerTwo][1] < array[pointerOne][1]) {
        temp = array[pointerOne]
      } else {
        temp[0] = array[pointerOne][0]
        temp[1] = array[pointerTwo][1]
      }
      array.splice(pointerOne, 2, temp)
      pointerOne = 0
      pointerTwo = pointerOne + 1
    } else {
      pointerOne += 1
      pointerTwo += 1
    }
  }


  return array;
}

const testCase = [[1, 2],[3, 5],[4, 7],[6, 8],[9, 10]]

const testCase2 = [
    [1, 10],
    [10, 20],
    [20, 30],
    [30, 40],
    [40, 50],
    [50, 60],
    [60, 70],
    [70, 80],
    [80, 90],
    [90, 100]
]

const testCase3 = [
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [1, 10]
]

let ans = mergeOverlappingIntervals(testCase3)
console.log(ans.toString())
//console.log(mergeSort(testCase3).toString())