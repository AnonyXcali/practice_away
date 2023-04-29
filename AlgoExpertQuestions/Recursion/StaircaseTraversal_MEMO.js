// function staircaseTraversal(n, maxSteps, idx, count) {
//   if(idx === maxSteps) return count
//   if(n < 0) return 0
//   if(n < 2) return 1
//   count = count + staircaseTraversal(n - idx, maxSteps, idx + 1, count)
//   console.log(count)
//   return count
// }

// function compute(height, maxSteps) {
//   let count = 0
//   return staircaseTraversal(height, maxSteps, 0, count)
// }

// const test = compute(6, 3)
// console.log(test)

function staircase(height, maxSteps, ref = []) {
  console.log(ref)
  if(height < 0) return 0
  if(height < 2) return 1



  if(!ref[height]) {
    for(let index = 1; index <= maxSteps; index +=1 ) {
      console.log(height)
      ref[height] += staircase(height - index, maxSteps, ref)
    }
  }

  return ref[height]
}

const solve = (height, maxSteps) => {
  let dp = new Array(height + 1)
  let ans = staircase(height, maxSteps, dp.fill(0))
  return ans
}

console.log(solve(4, 2))

