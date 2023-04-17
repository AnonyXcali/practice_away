function longestSubstringWithoutDuplication(string) {
  // Write your code here.
  const map = {}
  let pointerJ = 0
  let pointerI = 0
  let longestSubStr = ""

   while(pointerJ < string.length) {
      console.log(map)
     let currChar = string.charAt(pointerJ)

     if(!map[currChar]) {
       map[currChar] = true
       pointerJ += 1
     } else {
       let possibleStr = string.substring(pointerI, pointerJ)
       longestSubStr = longestSubStr.length > possibleStr.length ? longestSubStr : possibleStr
       while(string.charAt(pointerI) !== string.charAt(pointerJ)) {
         let curr = string.charAt(pointerI)
         delete map[curr]
         pointerI += 1
       }

       delete map[string.charAt(pointerI)]
       pointerI += 1
     }
   }

   let possibleStr = string.substring(pointerI, pointerJ)
   longestSubStr = longestSubStr.length > possibleStr.length ? longestSubStr : possibleStr

  return longestSubStr
}


console.log(longestSubstringWithoutDuplication("abacacacaaabacaaaeaaafa"))