function arrayOfProducts(array) {
  // Write your code here.
  
  const getProducts = (arr) => {
    if(arr.length <= 0) {
      return 1
    }
    function multiply(box) {
      if(box.length < 2) {
        return box[0]
      }
      let mult = box[0] * box[1]
      box = box.slice(2)
      box.splice(0, 0, mult)
      return multiply(box)
    }

    return multiply(arr, 1)
  }
  let midIndex = 0
  let result = []

  while(midIndex < array.length) {
    let leftArray = array.slice(0, midIndex)
    let rightArray = array.slice(midIndex + 1, array.length)
    result.push(getProducts(leftArray)*getProducts(rightArray))
    midIndex += 1
  }
  return result
}

let arr = [5, 1, 4, 2]
let ans = arrayOfProducts(arr)
console.log(ans)