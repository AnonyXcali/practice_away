function longestPalindromicSubstring(string) {
  // Write your code here.
  let currentLongest = ""
  for(let index = 0; index < string.length; index += 1){
    let odd = getPalindrome(string, index - 1, index + 1)
    let even = getPalindrome(string, index - 1, index)
    console.log(odd, even)
    let longest = odd.length > even.length ? odd : even
    currentLongest = longest.length > currentLongest.length ? longest : currentLongest
  }

  return currentLongest
}

function getPalindrome (string, indexI, indexJ) {
  while(indexI >= 0 && indexJ < string.length) {
    let boolCheck = string.charAt(indexI) === string.charAt(indexJ)
    if(boolCheck) {
      indexJ += 1
      indexI -= 1
    } else {
      break
    }
  }

  return string.substring(indexI + 1, indexJ)
}

console.log(longestPalindromicSubstring("abaxyzzyxf"))
