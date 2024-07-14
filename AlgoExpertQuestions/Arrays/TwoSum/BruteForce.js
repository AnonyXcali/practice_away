function twoNumberSum(array, targetSum) {
  // Write your code here.
  for(let i=0; i < array.length; i++) {
    for(let j=i+1; j < array.length; j++) {
      if(array[i] + array[j] === targetSum) {
        return[array[i], array[j]]
      }
    }
  }

  return []
}

const arr = [3, 5, -4, 8, 11, 1, -1, 6]
const target = 10
const answer = twoNumberSum(arr, target)
console.log(answer)