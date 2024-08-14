/**
 * Q: Longest Substring with At Least K Repeating Characters
 * 
 * Given a string s and an integer k, return the length of the longest substring 
 * of s such that the frequency of each character in this substring is greater than 
 * or equal to k.
 */

class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  longestSubstring(s, k) {
    let charSplit = s.split("")
    return this.helper(charSplit, 0, s.length, k)
  }

  helper (charArr = [], start, end, k) {
    if(end - start < k) return 0

    let count = new Array(26).fill(0)
    
    for(let i = start; i < end; i += 1) {
      count[charArr[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }

    for(let i = start; i < end; i += 1) {
      let ct = count[charArr[i].charCodeAt(0) - 'a'.charCodeAt(0)]
      if(ct < k) {
        let ahead = i + 1
        while(ahead < end && count[charArr[ahead].charCodeAt(0) - 'a'.charCodeAt(0)] < k) {
          ahead += 1
        }

        return Math.max(this.helper(charArr, start, i, k), this.helper(charArr, ahead, end, k))
      }
    }

    return end - start
  }
}

function main() {
  let str = "ababacb"
  let sol = new Solution()
  let ans = sol.longestSubstring(str, 3)
  console.log(ans)
}

main()