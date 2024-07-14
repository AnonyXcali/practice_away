function mergeSort(arr) {
  if(arr.length < 2) {
    return arr
  }

  let mid = Math.floor(arr.length / 2)
  let leftArray = arr.slice(0, mid)
  let rightArray = arr.slice(mid, arr.length)

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

 return result.concat(leftArray.slice(leftPointer).concat(rightArray.slice(rightPointer)))
}

function findThreesmallestNumbers(arr) {
  let smallestNum = Number.MIN_SAFE_INTEGER
  let result = []
  let tracked = {}

  for(let index = 0; index < arr.length; index += 1) {
    if(tracked.hasOwnProperty(arr[index])) {
      tracked[arr[index]] += 1
    } else {
      tracked[arr[index]] = 0
    }
  }
  
  //first smallestNumber 
  for(let index = 0; index < arr.length; index += 1) {
    if(arr[index] > smallestNum) {
      smallestNum = arr[index]
    }
  }

  result.push(smallestNum)

  if(tracked[smallestNum] > 0) {
    let count = tracked[smallestNum]
    while(result.length !== 3) {
      result.push(smallestNum)
    }
  }

  smallestNum = Number.MIN_SAFE_INTEGER

  
  if(result.length !== 3) {
    for(let index = 0; index < arr.length; index += 1) {
      if(arr[index] > smallestNum && arr[index] !== result[0]) {
        smallestNum = arr[index]
      }
    }
  
    result.push(smallestNum)
  
    if(tracked[smallestNum] > 0) {
      let count = tracked[smallestNum]
      while(result.length !== 3) {
        result.push(smallestNum)
      }
    }
  }


  smallestNum = Number.MIN_SAFE_INTEGER

  if(result.length !== 3) {
    for(let index = 0; index < arr.length; index += 1) {
      if(arr[index] > smallestNum && arr[index] !== result[1] && arr[index] !== result[0]) {
        smallestNum = arr[index]
      }
    }
  
    result.push(smallestNum)
  }

  return mergeSort(result)
}

const arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
const arr2 = [10, 5, 9, 10, 12]
const arr3 = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
console.log(findThreesmallestNumbers(arr2))