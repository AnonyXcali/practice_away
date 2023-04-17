function firstDuplicateValue(array) {
  let minIndex = -1

  for(let index = 0; index < array.length; index++) {
    for(let jIndex = index + 1; jIndex < array.length; jIndex++) {
      if(array[index] === array[jIndex] && index !== jIndex) {
        if(jIndex < minIndex && minIndex !== -1) {
          minIndex = jIndex
        } else if(minIndex === -1) {
          minIndex = jIndex
        }
      }
    }
   }
    return array[minIndex];
}

const arr = [15, 2, 6, 3, 3, 22, 14, 16, 6, 21, 4, 16, 2, 17, 9, 13, 1, 3, 5, 6, 1, 2, 23, 16, 16]
let ans = firstDuplicateValue(arr)
console.log(ans)