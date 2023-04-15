/*PRACTICE DAILY*/
/**
 * 1x Binary Search
 * 1x Merge Sort
 */


function mergeSort(arr) {
  if(arr.length < 2) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const leftArray = arr.slice(0, mid)
  const rightArray = arr.slice(mid, arr.length)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray) {
  let leftPointer = 0
  let rightPointer = 0
  let results = []

  while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
    if(leftArray[leftPointer] < rightArray[rightPointer]) {
      results.push(leftArray[leftPointer])
      leftPointer += 1
    } else {
      results.push(rightArray[rightPointer])
      rightPointer += 1
    }
  }

  return results.concat(leftArray.slice(leftPointer).concat(rightArray.slice(rightPointer)))
}

const test = [99, 2, 19, 24, 10, 28, 12, 55, 100, 101]
const ans = mergeSort(test)
console.log(ans)