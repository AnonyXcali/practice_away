/**
 * Q) 1.4
 * palindromePermutation
 * Given a string, write a function to check if it is
 * a permutation of a palindrome. A palindrome is a word
 * or a phrase that is the same forwards and backwards. A perumation
 * is a rearrangement of letters. The palindrome does not need to be limited
 * to dictionary words
 * 
 */

class Solution {
  palindromPermutation(str) {
    let allPermutations = this.computePermutations(str) || []

    //check if the given word is a palindrome
    if(this.isPalindrome(str)) return true

    for(let i=0; i < allPermutations.length; i+=1) {
      if(str === allPermutations[i]) continue
      let isPalindrome = this.isPalindrome(allPermutations[i])
      if(isPalindrome) return true
    }
    
  
    return false
  }

  isPalindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

    let pointerA = 0
    let pointerB = str.length - 1

    while(pointerA < pointerB) {
      if(str.charAt(pointerA) !== str.charAt(pointerB)) return false

      pointerA += 1
      pointerB -= 1
    }

    return true
  }

  computePermutations(str) {
    let result = new Set()
    let charArr = str.split("")
    console.log(charArr)

    function backtrack(start) {
      //base case
      if(start === str.length -1) {
        result.add(charArr.join(""))
        return
      }

      let seen = new Set()
      for(let i = start; i < str.length; i+=1) {
        if(seen.has(charArr[i])) continue

        seen.add(charArr[i])
        [charArr[start], charArr[i]] = [charArr[i], charArr[start]]
        backtrack(start + 1)
        [charArr[start], charArr[i]] = [charArr[i], charArr[start]]
      }
    }

    backtrack(0)
    return Array.from(result)
  }

  frequencyCountMethod_optimized(str) {
    //pre process the string
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); //replace non alphanumeric and covert to lowercase

    let frequencyCount = new Map()

    for(let i = 0; i < str.length; i+= 1) {
      let curr = str.charAt(i)
      frequencyCount.set(curr, (frequencyCount.get(curr) || 0) + 1)
    }

    let oddCount = 0
    for(let count of frequencyCount.values()) {
      if(count % 2 !== 0) {
        oddCount += 1
      }

      if(oddCount > 1) {
        return false
      }
    }

    return true
  }
}


function main() {
  let sol = new Solution()
  let str = "Tact Coast"

  console.log(sol.frequencyCountMethod_optimized(str))
}

main()