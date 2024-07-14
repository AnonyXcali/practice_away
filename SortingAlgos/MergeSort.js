function mergeSort(arr) {
  debugger
  //base case 
  if(arr.length < 2) {
    return arr
  }

  let midIndex = Math.floor(arr.length / 2)
  let leftArray = arr.slice(0, midIndex)
  let rightArray = arr.slice(midIndex, arr.length)

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

let array = [10, 5, 22, 3, 1, 15, 9, 19, 25, 26, 100]
let sorted = mergeSort(array)
console.log(sorted)