/**
 * Q)Two Pointers - 1 
 * isPalindrome
 * Given a string s, return true if it is a palindrome, otherwise return false.
 * A palindrome is a string that reads the same forward and backward. It is also 
 * case-insensitive and ignores all non-alphanumeric characters.
 */

class Solution {
  isPalindrome_naive(str) {
    if(str && str.length < 2) return true

    let strTrimmed = str.replace(/[\s\W]/g, "").toLowerCase()
    let ptr1 = 0
    let ptr2 = strTrimmed.length - 1

    while(ptr1 <= ptr2) {
      if(strTrimmed.charAt(ptr1) !== strTrimmed.charAt(ptr2)) {
        return false;
      }

      ptr1 += 1
      ptr2 -= 1
    }

    return true
  }
}


function main() {
  let sol = new Solution()
  let str = "Was it a car or a cat I saw?"
  console.log(sol.isPalindrome_naive(str))
}

main()