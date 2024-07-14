class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let encodedString = ""
    for(let str of strs) {
      encodedString += str.length + "#" + str
    }

     return encodedString
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let i = 0
    let decoded = []

    while(i < str.length) {
      let j = i
      while(str[j] !== "#") {
        j += 1
      }
      
      let wordLen = parseInt(str.slice(i, j), 10)
      let word = str.slice(j + 1, j + 1 + wordLen)
      decoded.push(word)
      i = j + 1 + wordLen
    }

    return decoded
  }
}


const enDecoder = new Solution()
const space = ["neet", ":", "love"]
let encoded = enDecoder.encode(space)
console.log(encoded)
let decoded = enDecoder.decode(encoded)
console.log(decoded)
