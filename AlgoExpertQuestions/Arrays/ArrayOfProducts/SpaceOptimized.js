function arrayOfProducts(array) {
  let resultArray = [...array].fill(1,0)
  let product = 1

  //Assigning values to left array
  for(let index=0; index < array.length; index++) {
    if(product !== 1) {
      resultArray[index] = product
    }
    product = array[index] * product
  }

  //Assigning values to right array

  product = 1

  for(let index=array.length - 1; index > -1; index--) {
    let calc = resultArray[index] * product
    resultArray[index] = calc
    product = array[index] * product
  }

  //final multiplication
  // for(let index=0; index < array.length; index++) {
  //   let calc  = leftArray[index] * rightArray[index]
  //   resultArray[index] = calc
  // }

  return resultArray
}

let arr = [5, 1, 4, 2]
let ans = arrayOfProducts(arr)
console.log(ans)