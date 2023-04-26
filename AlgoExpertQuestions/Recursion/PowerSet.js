function powerSet(arr, ref = [], result = []) {
  debugger
  if(ref.length === arr.length) {
    result.push(ref)
    return result
  }

  for(let index = 0; index < arr.length; index += 1) {
    result.push(ref)
    ref.push(arr[index])
    powerSet(arr, ref, result)
  }
  return result
}

let ans = powerSet([1])
console.log(ans)
