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

function threeNumberSum(arr, target) {
  let tableSet = new Set()
  let result = []
  let pointerOne = 0
  let pointerTwo = pointerOne + 1
  let pointerThree = pointerTwo + 1
  let flag = false
  //arr = mergeSort(arr)
  console.log(arr)
  
  while(pointerOne < arr.length && pointerTwo < arr.length) {
    //Calculate the pair sum
    let calc = target - arr[pointerOne] - arr[pointerTwo]

    //put the paired sum into the set table
    tableSet.put(arr[pointerOne])
    tableSet.put(arr[pointerTwo])

    //if the table set has the calculated value push the triplet or store it to be checked later
    if(tableSet.has(calc)) {
      result.push([arr[pointerOne], arr[pointerTwo], calc])
      flag = true
      pointerOne += 1
      pointerTwo += 1
      pointerThree = pointerTwo + 1
    } else if(pointerThree !== undefined) {
      //else store it in set table for it to be checked later
      tableSet.put(arr[pointerThree])
    }

    //increase the pointer by one
    if(!flag) {
      pointerThree += 1

    //if the pointer is greater or equal to array's length
    //increment the 1st and 2nd pointer's by one, and reset 3rd pointer to be ahead of new 2nd pointer
    if(pointerThree >= arr.length) {
      pointerOne += 1
      pointerTwo += 1
      pointerThree = pointerTwo + 1
     }
    } 

    flag = false
  }

  return result
}

let arr = [12, 3, 1, 2, -6, 5, -8, 6]
let target = 0
const ans = threeNumberSum(arr, target)
//console.log(mergeSort(arr))
console.log(ans.toString())
