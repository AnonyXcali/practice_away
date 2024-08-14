/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let tail = 0
  let max = 0
  let map = new Map()

  for(let head = 0; head < s.length; head += 1) {
      let c = s.charAt(head)
      if(map.get(c)) {
        map.set(c, map.get(c) + 1)
      } else {
        map.set(c, 1)
      }

      //check if currChar hits the k mark
      if(map.get(c) >= k) {
          let flag = true

          for (const key of map.keys()) {
            if(map.get(key) < k) {
              flag = false
              break
            }
          }

          if(flag) {
            max = Math.max(max, head - tail + 1)
          }
      }
  }

  return max
}

const longestSubstring_optimized = (s = "", k) => {
  let windowStart = 0
  let maxUnique = new Set(s).size
  let currentUnique = 0
 
  for(let i = 0 ; i < maxUnique; i += 1) {
    let characters = s.substring(windowStart, )
  }
}

function main() {
  let str = "ababacb"
  let k = 3
  let ans = longestSubstring_optimized(str, k)
  console.log(ans)
}

main()