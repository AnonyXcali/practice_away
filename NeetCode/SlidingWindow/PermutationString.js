/**
 *Q: Permutation String
 
 You are given two strings s1 and s2.
 
 Return true if s2 contains a permutation of s1, or false otherwise. 
 That means if a permutation of s1 exists as a substring of s2, then return true.
 
 Both strings only contain lowercase letters.
 */

class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if(s2 < s1) return false

    let s1Length = s1.length 
    let s1Sorted = s1.split("").sort().join("")
    let tail = 0
    let head = 0
    
    while(head < s2.length) {
      let windowSize = head - tail + 1
      while(windowSize < s1Length) {
        head += 1
        windowSize = head - tail + 1
      }

      let subStr = s2.substring(tail, head + 1)
      .split("").sort().join("")
      
      if(subStr === s1Sorted) return true

      tail += 1
      head += 1
    }

    return false
  }

  checkInclusion_attempt(s1, s2) {
    if(s1.length > s2.length) return false
    let map = new Map()
    let tail = 0
    let head = s1.length - 1
    let windowSize = s1.length

    for(let char of s1) {
      map.set(char, (map.get(char) || 0) + 1)
    }

    let mapCopy = new Map(map)

    while(head < s2.length) {
      while(mapCopy.size > 0) {
        let curr = s2.charAt(tail)
        if(mapCopy.has(curr)) {
          mapCopy.set(curr, mapCopy.get(curr) - 1)
          if(mapCopy.get(curr) === 0) {
            mapCopy.delete(curr)
          }
          
          tail += 1
        } else {
          tail += 1

          if(mapCopy.size < map.size) {
            mapCopy = new Map(map)
          }
          let currWindowSize = head - tail + 1
          while(currWindowSize < windowSize) {
            head += 1
            currWindowSize = head - tail + 1
          }

          break
        }
      }
      if(mapCopy.size === 0) return true
    }
    return false
  }

  checkInclusion_optimized(s1, s2) {
    //debugger
    if(s1.length > s2.length) return false

    let tail = 0
    let head = s1.length - 1

    let alphaMap = new Map([...Array(26)].map((_, i) => [String.fromCharCode(97 + i), 0]));
    let s1Map = new Map(alphaMap)
    let s2Map = new Map(alphaMap)

    for(let char of s1) {
      s1Map.set(char, s1Map.get(char) + 1)
    }

    for(let trail = tail; trail <= head; trail += 1 ) {
      let curr = s2.charAt(trail)
      s2Map.set(curr, s2Map.get(curr) + 1)
    }

    while(head < s2.length) {
      //comparison stage
      let match = 0
      for(let letter of alphaMap.keys()) {
        if(s1Map.get(letter) === s2Map.get(letter)) match += 1
      }
      if(match === 26) return true

      let atTail = s2.charAt(tail)

      s2Map.set(atTail, s2Map.get(atTail) > 0 ? s2Map.get(atTail) - 1 : 0)
      tail += 1

      head += 1
      let headChar = s2.charAt(head)
      s2Map.set(headChar, s2Map.get(headChar) + 1)
    }

    return false
  }
}

function main() {
  let s1 = "adc"
  let s2 = "dcda"

  let sol = new Solution()
  let ans = sol.checkInclusion_optimized(s1, s2)
  console.log(ans)
}

main()