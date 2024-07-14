/**
 * @author Saurav Tiru <sauravezio@gmail.com>
 */
function palindromeTime(str) {
  let minutes = 0
  let convertedTime = str.split(":")
  
  convertedTime[0] = parseInt(convertedTime[0], 10)
  convertedTime[1] = parseInt(convertedTime[1], 10)

  while(!convertToStringAndCheckPalindrome(convertedTime)) {
    if(convertedTime[1] >= 59) {
      convertedTime[1] = 0
      convertedTime[0] = convertedTime[0] + 1
      if(convertedTime[0] === 24) {
        convertedTime[0] = 0
      }
    } else {
      convertedTime[1] = convertedTime[1] + 1
    }
    minutes += 1
  }
  console.log(convertedTime)
  return minutes
}

function convertToStringAndCheckPalindrome(array) {
  let stringOne = array[0] < 10 ? ("0" + array[0]).toString() : array[0].toString()
  let stringTwo = array[1] < 10 ? ("0" + array[1]).toString() : array[1].toString()
  function isPalindrome(str) {
    if(str.length === 1) {
      return true
    } else if(str.charAt(0) !== str.charAt(str.length -1)) {
      return false
    }
    str = str.substring(1, str.length - 1)
    return isPalindrome(str)
  }
  return isPalindrome(`${stringOne}:${stringTwo}`)
}

let time = "00:01"
let minutesToPalindrome = palindromeTime(time)
console.log(minutesToPalindrome)
