class Set {
  constructor() {
    this.table = {}
  }

  has(element) {
    return this.table.hasOwnProperty(element)
  }

  put(element) {
    if(!this.has(element)) {
      this.table[element] = true
      return true
    } else {
      return false
    }
  }
}

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
    .concat(rightArray.slice(rightPointer))
  )
}

function twoNumberSum(array, targetSum) {
  let table = new Set()
  for(let index in array) { //o(n)
    let calc = targetSum - array[index]
    if(table.has(calc)) {
      return [array[index], calc]
    } else {
      table.put(array[index])
    }
  }

  return []
}


function threeNumberSum(arr, target) {
  //we know from 2 sum that we need to find the pair that equates to the target 
  //triplets now expects a pair + a single value to equate the sum
  //strategy would be -
  /**
   * find the difference of target - single number lets say arr[pointerOne]
   * difference = target - arr[pointerOne]
   * now we shall find the pair using two new pointers and interate over n-2 length
   * when we find the successfull pair we return and push the combined array of [pointerOne, pair(1), pair(2)]
   * push this new array to result
   * repeat until index pointer reaches array length
   */

  let result = []
  let jPointer = 0
  //arr = mergeSort(arr)

  for(let index = 0; index < arr.length; index++) { //runs the n length || o(n)
    while(jPointer < array.length) {
      let difference = target - arr[index]
      let rest = arr.slice(jPointer, arr.length)
      let possiblePair = twoNumberSum(rest, difference)
      if(possiblePair.length > 0) {
        result.push(mergeSort([arr[index], ...possiblePair]))
      }
    }
  }

  return result
}

let arr = [12, 3, 1, 2, -6, 5, -8, 6]
let target = 0
const ans = threeNumberSum(arr, target)
//console.log(mergeSort(arr))
console.log(ans.toString())

