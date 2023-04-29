function subSetSum(pSet, sum) {
  let result = []

  const compute = (arr = [], idx = 0) => {
    if(arr.reduce((a,b) => a + b, 0) === sum) {
      result.push([...arr])
    }

    for(let i = idx; i < pSet.length; i += 1) {
      if(arr.includes(pSet[i])) continue
      arr.push(pSet[i])
      compute(arr, idx + 1)
      arr.pop()
    }
  }

  compute([], 0)

  return result
}

let problemSet = [1,2,5,9,4]
let target = 6
let answers = subSetSum(problemSet, target)
console.log(answers)