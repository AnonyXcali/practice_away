function powerset(arr) {
  let result = []

  function compute(candidate, idx) {
    result.push([...candidate])

    for(let index = idx; index < arr.length; index += 1) {
      candidate.push(arr[index])
      compute(candidate, index + 1)
      candidate.pop()
    }
  }

  compute([], 0)

  return result
}

const test1 = [1]
console.log(powerSet(test1))