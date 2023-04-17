function fib(num, arr) {
  if(arr && arr.length > 0 && arr[num] !== undefined) {
    console.log(arr)
     return arr[num]
  }

  if(num === 0) {
     return 0
  }

  if(num === 1) {
    return 1
  }

  let calc = fib(num - 1, arr) + fib(num - 2, arr)  
  arr[num] = calc
  return arr[num]
}

const ans = fib(11, [])
console.log(ans)