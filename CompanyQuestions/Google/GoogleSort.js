/**
 * Q) 1
 * Company - Google
 * Stage: Phone Screen
 * Hiring position - Google Poland Front End
 * Difficulty - Medium
 * Type - String
 * ss
 * Question
 * Sort the given string but by avoiding the whitespace and
 * capital letters.
 * 
 * For eg -
 * input - Google Mail
 * output - Gaegil Mloo
 */

class Solution {
  googleSort_naive(str) {
    let computedStr = str.split("")
    // let resultantArray = new Array(str.length).fill(0)
    let regex = /[A-Z]/
    for(let i = 0; i < computedStr.length; i+= 1) {
      const curr = computedStr[i]
      if(regex.test(curr) || curr === " ") continue
      
      let innerPointer = i + 1
      let lowestCurrent = i
      while(innerPointer < computedStr.length) {
        let innerCurr = computedStr[innerPointer]
        if(regex.test(innerCurr) || innerCurr === " ") {
          innerPointer += 1
        } else if (innerCurr < computedStr[lowestCurrent]) {
          lowestCurrent = innerPointer
        }
        innerPointer += 1
      }

      let temp = computedStr[i]
      computedStr[i] = computedStr[lowestCurrent]
      computedStr[lowestCurrent] = temp
    }

    return computedStr.join("")
  }

  googleSort_optimized(str) {
    let computedStr = str.split("");
    let regex = /[A-Z]|\s/; // Matches capital letters and whitespace
    let toSort = []

    for(let i = 0; i < computedStr.length; i += 1) {
      if(!regex.test(computedStr[i])) {
        toSort.push(computedStr[i])
      }
    }

    toSort.sort()

    let sortedIndex = 0
    for(let i = 0; i < computedStr.length; i+=1) {
      if(!regex.test(computedStr[i])) {
        computedStr[i] = toSort[sortedIndex]
        sortedIndex += 1
      }
    }

    return computedStr.join("")

  }
}


function main() {
  let sol = new Solution()
  let str = "Google Mail"

  console.log(sol.googleSort_optimized(str))
}

main()