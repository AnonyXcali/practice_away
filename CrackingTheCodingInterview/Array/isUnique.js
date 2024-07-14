/**
 * Q) 1.1
 * isUnique
 * Implement an algorithm to determine if a string has all unique characters
 * 
 * Follow up -
 * What if you cannot use additional data structures?
 */

class Solution {
  isUnique_naive(str = "") {
    let flag = true
    let set = new Set()

    for(let i = 0 ; i < str.length; i += 1) {
      if(set.has(str[i])) {
        flag = false
      } else {
        set.add(str[i])
      }
    }

    return flag
  }

  isUnique_ASCII(str = "") {
    if (str.length > 128) return false; // More than 128 characters means duplicates must exist

    let charSet = new Array(128).fill(false);

    for (let i = 0; i < str.length; i++) {
      let val = str.charCodeAt(i);
      if (charSet[val]) {
        return false;
      }
      charSet[val] = true;
    }

    return true;
  }
}


function main() {
  let sol = new Solution()
  let str = "abcd"

  console.log(sol.isUnique_naive(str))
}

main()