class Solution {
  reverseString(str){
    let stack = []
    let res = ""

    for(let i = 0; i < str.length; i += 1) {
      stack.push(str.charAt(i))
    }

    while(stack.length > 0) {
      let popped = stack.pop()
      res += popped
    }

    return res

  }

  reverseString_space(str) {
    let arr = str.split("")
    let len = arr.length
    let p = 0
    let q = len - 1

    while(p < q) {
      [arr[p], arr[q]] = [arr[q], arr[p]]
      p += 1
      q -= 1
    }

    return arr.join("")
  }
}

function main() {
  let str = "Cat"
  let sol = new Solution()
  let ans = sol.reverseString_space(str)
  console.log(ans)
}

main()