function arrayOfProducts(array) {
  let leftArray = [...array].fill(1,0)
  let rightArray = [...array].fill(1,0)
  let resultArray = [...array].fill(1,0)
  let product = 1

  //Assigning values to left array
  for(let index=0; index < array.length; index++) {
    if(product !== 1) {
      leftArray[index] = product
    }
    product = array[index] * product
  }

  //Assigning values to right array

  product = 1

  for(let index=array.length - 1; index > -1; index--) {
    if(product !== 1) {
      rightArray[index] = product
      console.log(rightArray)
    }
    product = array[index] * product
  }

  //final multiplication
  for(let index=0; index < array.length; index++) {
    let calc  = leftArray[index] * rightArray[index]
    resultArray[index] = calc
  }

  return resultArray
}

let arr = [5, 1, 4, 2]
let ans = arrayOfProducts(arr)
console.log(ans)