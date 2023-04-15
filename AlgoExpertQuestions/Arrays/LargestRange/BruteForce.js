/*
  Find the lowest number in the array
  Find the highest number in the array
*/

function findMax(max, array) {
  for(let index=0; index < array.length; index++) {
    if(max === undefined) {
      max = array[index]
    } else if(array[index] > max) {
      max = array[index]
    }
  }
  
  return max
}

function findMin(min, array) {
  for(let index=0; index < array.length; index++) {
    if(min === undefined) {
      min = array[index]
    } else if(array[index] < min) {
      min = array[index]
    }
  }

  return min
}

function findRange(min, max, array) {
  let rangeMin, rangeMax

  for(let index=0; index < array.length; index++) {
    let calc = min + index
    if(array.indexOf(calc) < 0) {
      break
    } else {
      rangeMax = calc
    }
  }

  const minAbsoluteDistance = Math.abs(min) + rangeMax

  for(index=0; index < array.length; index++) {
    let calc = max - index
    if(array.indexOf(calc) < 0) {
      break
    } else {
      rangeMin = calc
    }
  }

  if(rangeMin > minAbsoluteDistance && rangeMin !== max) {
    return [rangeMin, max]
  } else {
    return [min, rangeMax]
  }
}

function largestRange(array) {
  let min = findMin(Number.MAX_SAFE_INTEGER, array)
  let max = findMax(Number.MIN_SAFE_INTEGER, array)
  let result = findRange(min, max, array)
  return result
}

let arr = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
let arr2 = [0, -5, 9, 19, -1, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13, 14, -2]
let arr3 = [1, 1, 1, 3, 4]
let ans = largestRange(arr2)
console.log(ans)
