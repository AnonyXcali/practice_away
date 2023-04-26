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
  console.log(leftArray, rightArray)
  let result = []
  let leftPointer = 0
  let rightPointer = 0
  let queue = []
  

  while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
    if(queue.length > 0) {
      result.push(queue.pop())
    }
    if(leftArray[leftPointer] === " ") {
      console.log("??")
      queue.push("x")
      leftPointer += 1
    } else if(rightArray[rightPointer] === " ") {
      queue.push("x")
      rightPointer += 1
    } else if(leftArray[leftPointer] < rightArray[rightPointer]) {
      result.push(leftArray[leftPointer])
    
      leftPointer += 1
    } else {
      result.push(rightArray[rightPointer])
      rightPointer += 1
    }
  }

  return result.concat(leftArray.slice(leftPointer).concat(rightArray.slice(rightPointer)))
}


function alphaSort(string) {
  let split = string.split("")
  return split.sort()
}

// let testString = "Google Mail"
// console.log(alphaSort(testString))

function runner(array) {
  return mergeSort(array)
}

const arr2 = [100, " ", 2]
const arr = [100, 2, " ", 55, 1, 10, 23, 89, 90, 25, 67]
const ans = runner(arr)
console.log(ans)