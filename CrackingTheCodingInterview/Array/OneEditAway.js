/**
 * Q) 1.5
 * oneEditAway
 * There are three types of edits that can be performed on strings:
 * Insert a character, remove a character, replace a character.
 * Given two strings, write a function to check if they are one
 * edit away (or zero edits away)
 */

class Solution {
  oneEditAway_naive(strA, strB) {
    let countEdit = 0
    if(strA === strB) return true

    if(strA.length < strB.length) {
      countEdit += 1
    } else if(strB.length > strA.length) {
      countEdit += 1
    } else if(strB.length === strA.length) {
      let replaceCount = 0
      let pointerA = 0
      let pointerB = 0
      while(pointerA <= strA.length && pointerB <= strB.length) {
        if(replaceCount > 1 || countEdit > 1) {
          return false
        }

        if(strA.charAt(pointerA) !== strB.charAt(pointerB)) {
          replaceCount += 1
          countEdit += 1
        }

        pointerA += 1
        pointerB += 1
      }
    }

    return countEdit <= 1
  }

  oneEditAway_optimized(strA, strB) {
    if(strA.length === strB.length) {
      //check for possible replacements
      return this.checkReplacements(strA, strB)
    } else if(strA.length + 1 === strB.length) {
      //check for possible insertion (first string)
      return this.checkInsertion(strA, strB)
    } else if(strA.length === strB.length + 1) {
      //check for possible inserting in second string
      return this.checkInsertion(strB, strA)
    }
  }

  checkReplacements(strA, strB) {
    let foundDifference = false

    for(let i = 0; i < strA.length; i+= 1) {
      if(strA.charAt(i) !== strB.charAt(i)) {
        if(foundDifference) {
          return false
        }

        foundDifference = true
      }
    }

    return foundDifference
  }

  checkInsertion(strA, strB) {
    let pointerA = 0
    let pointerB = 0
    while(pointerA <= strA.length && pointerB <= strB.length) {
      //check if the elements don't match
      if(strA.charAt(pointerA) !== strB.charAt(pointerB)) {
        //check if the pointers are not equal, if they are not equal
        //then there are more than 1 edit
        if(pointerA !== pointerB) {
          return false
        }

        // we try to find the matching character
        pointerB += 1
      } else {
        pointerA += 1
        pointerB += 1
      }
    }
    
    return true
  }
}


function main() {
  let sol = new Solution()
  let str = "abcd"

  console.log(sol.oneEditAway_optimized("pale", "ple"))
}

main()