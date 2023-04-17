function mergeSort(arr) {
  //debugger
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
   let midPoint = leftArray.length - 1

   function cyclicShift() {
    let count = 0
    let ptr = leftPointer
    let prev = leftArray[leftArray.length - 1]
    let surplus = undefined
    while(count < 1) {
       let temp = leftArray[ptr]
       leftArray[ptr] = prev
       leftArray[leftArray.length -1] = temp
       prev = leftArray[leftArray.length -1]
       ptr += 1
  
      if(ptr >= leftArray.length) {
        surplus = leftArray[leftPointer]
        count += 1
      }
    }
    leftArray.push(surplus)
    rightArray = rightArray.slice(rightPointer, rightArray.length)
   }

   
   while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
     if(leftArray[leftPointer] <= rightArray[rightPointer]) {
       leftPointer += 1
     } else {
      //  let temp = arr[p2];
      //  int idx = p2;

       while(idx > p1) {
        arr[idx] = arr[idx - 1];
        idx = idx - 1;
      }
      //  cyclicShift()
      //  leftArray[leftPointer] = temp
      //  console.log(leftArray)
      //  console.log(rightArray)
      //  leftPointer += 1
      //  rightPointer += 1
      //  midPoint += 1
     }
   }

   return [...leftArray].concat([...rightArray])
}

let array = [3,6,8,11,4,7,9,12]
let sorted = mergeSort(array)
console.log(sorted)