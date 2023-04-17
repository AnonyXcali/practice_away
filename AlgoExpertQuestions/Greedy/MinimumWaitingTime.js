function accSum(arr) {
  return arr.reduce((a,b) => {
    return a + b
  }, 0)
}

function minimumWaitingTime(queries) {

  let sorted = queries.sort((a,b) => a - b)
  console.log(sorted)
  let min = 0
 

  for(let index = 0; index < sorted.length; index += 1) {
    let elementsLeft = sorted.length - (index + 1)
    min += sorted[index] * elementsLeft
  }
  
  return min

}

const queries = [17, 4, 3]
console.log(minimumWaitingTime(queries))

