/**
 PHASE ONE
 - Search for min errored value and its index
 - Search for the index it has to be replaced at.
 - Mark that corrected index as start index for plausible sub array.

 PHASE TWO
 - Search for max errored value and its index
 - Search for the index it has to be replaced at.
 - Mark that corrected index as end index for plausible sub array.
 
 PHASE THREE
 - Return the indexes in an array.
 */


 function mergeSort(array) {
   if(array.length < 2) return array

   let mid = Math.floor(array.length / 2)
   let leftArray = array.slice(0, mid)
   let rightArray = array.slice(mid, array.length)

   return merge(mergeSort(leftArray), mergeSort(rightArray))
 }

 function merge(leftArray, rightArray) {
   let lP = 0
   let rP = 0
   let result = []

   while(lP < leftArray.length && rP < rightArray.length) {
     if(leftArray[lP] < rightArray[rP]) {
       result.push(leftArray[lP])
       lP += 1
     } else {
      result.push(rightArray[rP])
      rP += 1
     }
   }

   return result.concat(
     leftArray.slice(lP).concat(
       rightArray.slice(rP)
     )
   )
 }


 function subarraySort(array) {
  // Write your code here.
  let errorMin = undefined
  let flag = false
  let result = []

  /*PHASE ONE*/
  for(let index = 0; index < array.length; index++) {
    if(array[index + 1] !== undefined && array[index + 1] < array[index]) {
      if(array[errorMin] !== undefined && array[index + 1] < array[errorMin]) {
        errorMin = index + 1
      } else if (array[errorMin] === undefined) {
        errorMin = index + 1
      }
    }
  }

  console.log(errorMin)

  if(errorMin === undefined) {
    return [-1, -1]
  }

  let correctedMinIndex = undefined

  for(let index=errorMin - 1; index > -1; index--) {
    if(arr[index] > array[errorMin]) {
      if(correctedMinIndex !== undefined && array[correctedMinIndex] >= array[index]) {
        correctedMinIndex = index
      } else {
        correctedMinIndex = index
      }
    }
  }

  if(correctedMinIndex !== undefined) {
    result.push(correctedMinIndex)
  }

  /*PHASE TWO*/

  let errorMax = undefined

  for(let index = array.length; index > -1; index --) {
    if(array[index - 1] !== undefined && array[index] < array[index - 1]) {
      if(array[errorMax] !== undefined && array[errorMax] < array[index]) {
        errorMax = index - 1
      } else if(errorMax === undefined){
        errorMax = index - 1
      }
    }
  }

  let correctedMaxIndex = undefined

  for(let index = errorMax + 1; index < array.length; index++) {
    if(array[index] < array[errorMax]) {
      if(array[correctedMaxIndex] !== undefined && array[correctedMaxIndex] <= array[index]) {
        correctedMaxIndex = index
      } else {
        correctedMaxIndex = index
      }
    }
  }

  if(correctedMaxIndex !== undefined) {
    result.push(correctedMaxIndex)
  }

  return result
}


let arr = [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]
let ans = subarraySort(arr)
console.log(ans)