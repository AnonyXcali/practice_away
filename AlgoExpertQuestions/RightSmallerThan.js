function rightSmallerThan(array) {
  //const sortedArray = array.sort()
  const indexMap = {}

  for(let index = 0; index < array.length; index += 1) {
    indexMap[array[index]] = index
  }

  console.log(indexMap)
}


const arr = [8, 5, 11, -1, 3, 4, 2]
rightSmallerThan(arr)