/**
 * Q) 1.6
 * String Compression
 * Implement a method to perform basic string compression using the counts of repeated
 * characters. For example, the string aabccccaaaa would become a2b1c5a3. If the compressed
 * string would not become smaller than the original string, your method should return the
 * original string. You can assume the string has only upper case and lowercase letters
 * (a-z)
 * 
 * Follow up -
 * What if you cannot use additional data structures?
 */

class Solution {
  stringCompression_naive(str) {
    //let use 2 pointer method
    let strArr = str.split("")
    let refPointer = 0
    let currPointer = 0
    let currCount = 0
    let storeArr = []

    while(refPointer < strArr.length) {
      if(strArr[refPointer] === strArr[currPointer]) {
        currCount += 1
        currPointer += 1
      } else {
        //Push the letter & count to storeArr
        storeArr.push(strArr[refPointer], currCount)
        
        //update the refPointer with currPointer
        refPointer = currPointer
        //reset the count
        currCount = 0
      }
    }

    let finalString = storeArr.join("")

    if(finalString.length < str.length) return finalString
    return str
  }
}


function main() {
  let sol = new Solution()
  let str = "aaaaaaaabbbbbccdddaaaaa"

  console.log(sol.stringCompression_naive(str))
}

main()