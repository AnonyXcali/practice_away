function recursiveSum(arr) {
  if(arr.length < 2) return arr[0]
  let calcSum = arr[0] + arr[1]
  arr = arr.slice(2)
  arr.splice(0,0, calcSum)
  return recursiveSum(arr)
}

const arr = [1,2,3,4,5,6,7,8,9,10]
const sum = recursiveSum(arr)
console.log(sum)