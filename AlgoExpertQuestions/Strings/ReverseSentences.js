class Stack  {
  constructor() {
    this.wordBox = []
  }

  push(value) {
    this.wordBox.unshift(value)
  }

  pop() {
    return this.wordBox.shift()
  }

  size() {
    return this.wordBox.length
  }
}


function reverseWordsInString(string) {
  // Write your code here.

  let stacked = new Stack()
  let higherIndex = 0


  while(higherIndex < string.length) {
    let isLetter = string.charAt(higherIndex)

    if(isLetter !== " " && isLetter.length > 0) {
      let pointer = higherIndex
      let word = []
      let complete = ""
      let current = string.charAt(pointer)
      while(current !== " " && current.length > 0) {
        word.push(current)
        pointer += 1
        current = string.charAt(pointer)
      }
      complete = word.join("")
      stacked.push(complete)
      word = []
      
      higherIndex = pointer
    } else {
      stacked.push(isLetter)
      higherIndex += 1
    }
  }

  let finalSentence = []
  const stackedSize = stacked.size()
  

  for(let index = 0; index < stackedSize; index += 1) {
    let word = stacked.pop()
    console.log(word)
    finalSentence.push(word)
  }
  
  return finalSentence.join("");
}

const reversed = reverseWordsInString("Saurav is Great")
//Great is Saurav

