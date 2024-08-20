class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {

    if(t.length > s.length) return ""

    let sMap = new Map()
    let tMap = new Map()
    let have = 0
    let minLength = Infinity
    let tail = 0
    let head = 0
    let result = []

    for(let letter of t) {
      sMap.set(letter, (sMap.get(letter) || 0) + 1)
    }


    while(head < s.length) {
      let curr = s.charAt(head)
      if(tMap.get(curr)) {
        tMap.set(curr, tMap.get(curr) + 1)
      } else {
        tMap.set(curr, 1)
      }
      
      if(sMap.get(curr) !== undefined && tMap.get(curr) === sMap.get(curr)) {
        have += 1
      }

      while(have === sMap.size) {
        if(head - tail + 1 < minLength) {
          result = [tail, head]
          minLength = head - tail + 1
        }
        const atTail = s.charAt(tail)
        tMap.set(atTail,tMap.get(atTail) - 1)

        if(sMap.get(atTail) !== undefined && tMap.get(atTail) < sMap.get(atTail)) {
          have -= 1
        }

        tail += 1
      }

      head += 1
    }

    if(result && result.length > 0 && minLength !== Infinity) {
      return s.substring(result[0], result[1] + 1)
    }

    return ""
  }
}

function main() {
  let sol = new Solution()
  let s2 = "ADOBECODEBANC"
  let t2 = "ABC"
  let s = "aa"
  let t = "aa"
  let ans = sol.minWindow(s, t)
  console.log("==>", ans)
}

main()