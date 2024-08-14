/**
 * Q: Longest Substring Length with K Distinct Characters
 * Return the longest possible substring length but with a given constraint 
 * that the substring should contain only K distinct characters.
 */

class Solution {
  longestSubstringLength(str, k) {
    let maxLength = 0
    let windowStart = 0
    let hashMap = new Map()

    for(let i = 0; i < str.length; i += 1) {
      let char = str.charAt(i)
      
      if(hashMap.get(char)) {
        hashMap.set(char, hashMap.get(char) + 1)
      } else {
        hashMap.set(char, 1)
      }

      while(hashMap.size > k) {
        let currChar = str.charAt(windowStart)
        hashMap.set(currChar, hashMap.get(currChar) - 1)
        if(hashMap.get(currChar) === 0) {
          hashMap.delete(currChar)
        }
        windowStart += 1
      }

      maxLength = Math.max(maxLength, i - windowStart + 1)
    }

    return maxLength
  }
}

function main() {
  let str = "aaa"
  let k = 2
  let sol = new Solution()
  let ans = sol.longestSubstringLength(str, k)
  console.log(ans)
}

main()