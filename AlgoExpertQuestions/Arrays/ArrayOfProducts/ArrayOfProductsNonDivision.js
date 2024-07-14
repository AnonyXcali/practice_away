function arrayOfProducts(array) {
  let result = []
  let pointer = 0
  let trail = 1
  let product = 1
 
  while(pointer < array.length) {
    if(pointer === trail) {
      trail += 1
    }

    if(array[trail] !== undefined) {
      product = array[trail] * product
    }

    trail += 1

    if(trail >= array.length) {
      pointer += 1
      trail = 0
      result.push(product)
      product = 1
    }
  }
  return result
}

const arr = [9, 3, 2, 1, 9, 5, 3, 2]
const result = arrayOfProducts(arr)
console.log(result)