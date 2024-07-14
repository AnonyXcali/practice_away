class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {

    if(strs.length === 0 || !strs) return ""

    const alphaString = "abcdefghijklmnopqrstuvwxyz"
    let encodedString = ""

    //create a map
    const map = {}
    for(let i = 0; i < alphaString.length; i++) {
      map[alphaString[i]] = i
    }

    /*
     { 
      a: 0,
      b: 1
      ... so forth so on.
     }
    */

     for(let i = 0; i < strs.length; i++) {
      for(let j = 0; j < strs[i].length; j++) {
        let curr = strs[i][j]
        let lookupValue = map[curr]
        encodedString += lookupValue
        encodedString += j === strs[i].length - 1 ? "" : "-"
      }
      encodedString += i === strs.length - 1 ? "" : "_"
     }

     return encodedString
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    if(!str || str.length === 0) return []

    const alphaString = "abcdefghijklmnopqrstuvwxyz1234567890"
    let decoded = []

    //create a map
    const map = {}
    for(let i = 0; i < alphaString.length; i++) {
      map[i] = alphaString[i]
    }

    //split by _ "underscore"
    const split = str.split("_")

    for(let i = 0; i < split.length; i += 1) {
      //debugger
      let tempString = ""
      let pointer = 0
      let lookAhead = pointer + 1
      let token = split[i][0]
      
      while(pointer <= split[i].length) {
        while(split[i][lookAhead] && split[i][lookAhead] !== "-") {
          token += split[i][lookAhead]
          lookAhead += 1
        }
  
        //we get the letter key
        let lookup = map[token]
        tempString += lookup
        pointer = lookAhead + 1 // since we need to skip the "-"
        lookAhead = pointer + 1
        token = split[i][pointer]
      }
      
      decoded.push(tempString)
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
