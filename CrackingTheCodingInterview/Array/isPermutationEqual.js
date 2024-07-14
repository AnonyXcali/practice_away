/**
 * Q) 1.2
 * isPermutationEqual
 * Given two strings write a method to decide if one is a
 * permutation of the other
 * 
 * Questions - 
 * What is the character set -> ASCII or Unicode
 * Are the characters case sensitive?
 * Are the whitespace significant?
 * 
 */

class Solution {
  isPermuationEqual_naive(strA = "", strB = "", whitespaceSignificant = false) {
    //if not whitespace significant trim the strings
    if (whitespaceSignificant) {
      strA = strA && strA.trim() || ""
      strB = strB && strB.trim() || ""
    }
    if (strA.length !== strB.length) return false
    let sortedA = strA.split("").sort().join("")
    let sortedB = strB.split("").sort().join("")
    return sortedA === sortedB
  }

  isPermuationEqual_optimized(strA = "", strB = "", whitespaceSignificant = false) {
    //if not whitespace significant trim the strings
    if (whitespaceSignificant) {
      strA = strA && strA.trim() || ""
      strB = strB && strB.trim() || ""
    }
    if (strA.length !== strB.length) return false

    //if Ascii
    let charSet = new Array(128).fill(0);

    //update count
    for (let i = 0; i < strA.length; i++) {
      let curr = strA.charAt(i)
      charSet[curr] += 1
    }

    //now compare and reduce if a count is negative return false
    for (let i = 0; i < strB.length; i += 1) {
      let curr = strB.charAt(i)
      charSet[curr] -= 1
      if (charSet[curr] < 0) return false
    }

    return true
  }
}


function main() {
  let sol = new Solution()

  console.log(sol.isPermuationEqual_optimized("abc", "bac", false))
}

main()