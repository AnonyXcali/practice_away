/**
 * You would be given a string and a substring.
 * Knuth Moriss Pratt algo helps to find a pattern (repeating)
 * and utilize the backtracking process to find the possible
 * substring in the given string.
 * 
 * Algorithm is divided in 2 parts
 * 1) - Create a table using the substring, to find internal matching
 * pattern indexes
 * 
 * 2) - Use the table to find the substring in the string.
 * 
 * 3) - Return Boolean at end under given conditions if substring
 * is found in the string.
 */

function KMP(string, substring) {
  /**
   * Step 1
   * Create the table
   */

  const table = createTable(substring)

  /**
   * Step 2
   * Use the table to perform KMP match
   */
  const match = substringMatch(table, string, substring)

  /**
   * Return the boolean
   */
  return match
}

function substringMatch(table, string, subString) {
  console.log(string, subString, table)
  let pointerI = 0
  let pointerJ = 0

  while(pointerI + subString.length - pointerJ <= string.length) {
    let charCompare = string.charAt(pointerI) === subString.charAt(pointerJ)

    if(charCompare) {
      if(pointerJ === subString.length - 1) {
        return true
      }
      pointerI += 1
      pointerJ += 1
    } else if(pointerJ > 0) {
      pointerJ = table[pointerJ - 1] + 1
    } else {
      pointerI += 1
    }
  }

  return false
}


/**
 * This function helps to map the indexes based on the
 * matching pattern in the substring.
 * @returns array
 */
function createTable(string) {
  let pointerI = 1
  let pointerJ = 0
  let resultant = new Array(13).fill(-1)

  while(pointerI < string.length) {
    //compare I with J

    let compareBool = string.charAt(pointerI) === string.charAt(pointerJ)

    if(compareBool) {
      //push the jth Index to resultant
      resultant[pointerI] = pointerJ

      //increment jTh and iTh index with ONE
      pointerI += 1
      pointerJ += 1

    } else if(pointerJ > 0) {
      pointerJ = resultant[pointerJ - 1] + 1
    } else {

      //reset J to starting index
      pointerI += 1
    }
  }
  

  return resultant

}

let bigString = "aefaefaefaedaefaedaefaefa"
let subString = "aefae"

console.log(KMP(bigString, subString))