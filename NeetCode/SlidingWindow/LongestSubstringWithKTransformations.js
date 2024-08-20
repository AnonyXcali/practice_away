class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let map = new Map()
    let tail = 0
    let maxLength = 0

    for(let head = 0; head < s.length; head+=1) {
      let curr = s.charAt(head)
      map.set(curr, (map.get(curr) || 0) + 1)

      let windowSize = head - tail + 1
      let maxFrequency = 0
      
      for(let freq of map.values()){
        maxFrequency = Math.max(maxFrequency, freq)
      }

      let possibleTransformations = windowSize - maxFrequency || 0

      if(possibleTransformations <= k) {
        maxLength = Math.max(maxLength, windowSize)
      } else {
        while(possibleTransformations > k && tail < head && tail < s.length) {
          curr = s.charAt(tail)
          map.set(curr, map.get(curr) - 1)
          tail += 1

          for(let freq of map.values()){
            maxFrequency = Math.max(maxFrequency, freq)
          }
          windowSize = head - tail + 1
          possibleTransformations = windowSize - maxFrequency || 0
        }
        maxLength = Math.max(maxLength, possibleTransformations)
      }
    }
    return maxLength
  }
}

function main() {
  let str = "ABABBA"
  let str2 = "XYYX"
  let sol = new Solution()
  let ans = sol.characterReplacement("ABAA", 0)
  console.log(ans)
}

main()
