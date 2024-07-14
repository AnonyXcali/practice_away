function sameBsts(arrayOne, arrayTwo) {
  if(!arrayOne || !arrayTwo || arrayOne.length !== arrayTwo.length) return false
  const map = {} //contains map of first array elements

  //creating a map of elements visited
  for(let index = 0; index < arrayOne.length; index += 1) {
    map[arrayOne[index]] = true
  }

  //iterating over second array of elements and comparing with map
  for(let index = 0; index < arrayTwo.length; index +=1) {
    if(!map[arrayTwo[index]]) {
      return false
    }
  }

  return true // assuming the arrays are identical BST
}

function sameBsts(arrayOne, arrayTwo) {
  //check the first element
  //check the length
  //both has to be true else return false  
  if(arrayOne.length <= 1 || arrayTwo.length <= 1) return true //(1)
  if(arrayOne[0] !== arrayTwo[0]) return false //(1)
  if(arrayOne.length !== arrayTwo.length) return false //(1)

  let smallerElementsOne = [] //(n)
  let biggerElementsOne = [] //(n)
  let smallerElementsTwo = [] //(n)
  let biggerElementsTwo = [] //(n)

  for(let index = 1; index < arrayOne.length; index += 1) { //(n)
    if(arrayOne[index] < arrayOne[0]) {
      smallerElementsOne.push(arrayOne[index])
    } else {
      biggerElementsOne.push(arrayOne[index])
    }
  }

  for(let index = 1; index < arrayTwo.length; index += 1) { //(n)
    if(arrayTwo[index] < arrayTwo[0]) {
      smallerElementsTwo.push(arrayTwo[index])
    } else {
      biggerElementsTwo.push(arrayTwo[index])
    }
  }

  return sameBsts(smallerElementsOne, smallerElementsTwo) === sameBsts(biggerElementsOne, biggerElementsTwo)
}
const arr1 = [10, 15, 8, 12, 94, 81, 5, 2, 11]
const arr2 =  [10, 8, 5, 15, 2, 12, 11, 94, 81]
//[5, 2, -1, 100, 45, 12, 8, -1, 8, 10, 15, 8, 12, 94, 81, 2, -34],  [5, 8, 10, 15, 2, 8, 12, 45, 100, 2, 12, 94, 81, -1, -1, -34, 8]
const answer = sameBsts(arr1, arr2)
console.log(answer)


/**
 * { 10: true, 15: true, 8: true, 12: true, 94: true, 81: true, 5: true, 2: true, 11: true }
 * checks 10 - exists
 * checks 8 - exists
 * checks 5 - exists
 * checks 15  exists
 * checks 2 - exists
 * checks 12 - exists
 * checks 11 - exists
 * checks 94 - exists
 * checks 81 - exists
 */