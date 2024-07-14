/**
 * Q) 1.3
 * URLify
 * Write a method to replace all spaces in a string with
 * "%20". You may assume that the string has sufficient space
 * at the end to hold the additional characters, and that you
 * are given the "true" length of the string.
 */

class Solution {
  urlify(str, trueLength) {
    //let's calculate the spaces in the string
    let spaceCount = 0
    let charArray = str.split("")

    for(let i = 0; i < trueLength; i ++) {
      spaceCount += str.charAt(i) === " " ? 0 : 1 
    }

    //now lets calculate the actual position in the actual string
    //post replacing
    //the logic for spaceCount * 2 is that 
    // -> in %20 -> % is already occupying a space so we need to accomodate
    // for 2 spaces (i.e "2" & "0" in %20)
    let index = trueLength + (spaceCount * 2)


    //now we start replacing from backwards
    for(let i = trueLength - 1; i >= 0; i-=1) {

      if(charArray[i] === " ") {
        charArray[index - 1] = "0"
        charArray[index - 2] = "2"
        charArray[index - 3] = "%"
        index -= 3
      } else {
        charArray[index - 1] = charArray[i]
        index -= 1
      }
    }

    return charArray.join("")
  }
}


function main() {
  let sol = new Solution()
  let str = "Mr Smith John    "

  console.log(sol.urlify(str, 13))
}

main()