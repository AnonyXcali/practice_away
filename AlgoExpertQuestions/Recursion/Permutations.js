function getPermutations(array) {
  debugger
  if(array.length === 0) {
    return array
  }
  
  if (array.length === 1) {
    return [array]
  }

  let result = []

  for (let index = 0; index < array.length; index += 1) {
    let tempArray = array.map(item => item)
    let temp = tempArray[0]
    tempArray[0] = array[index]
    tempArray[index] = temp
    let sliced = tempArray.slice(1, array.length)
    let permutations = getPermutations(sliced)

    for (let jIndex = 0; jIndex < permutations.length; jIndex += 1) {
      let temp = []
      temp[0] = array[index]
      temp.push(...permutations[jIndex])
      result.push(temp)
    }
  }

  return result

}

let test = ["(", ")"]
let perms = getPermutations(test)
console.log(perms)