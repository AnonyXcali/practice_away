class Stack {
  constructor() {
    this.stacked = []
    this.currentLongest = 0
    this.longest = 0
  }
  updateFinalLongest(length) {
  	this.currentLongest = length
  }
  
  longestBalanced() {
  	return this.currentLongest
  }
  
  updateLength(length) {
  	this.longest = length
  }
  
  longestLength() {
		return this.longest
	}

  pop() {
    return this.stacked.shift()
  }

  push(element) {
    this.stacked.unshift(element)
  }

  getElement(index) {
    console.log(this.stacked[0], this.stacked[1])
    return this.stacked[index]
  }

  size() {
    return this.stacked.length
  }
}

function update(string, stacked, index) {
  debugger  
  if(string.charAt(index) === ")") {
    //check previous
    if(string.charAt(index - 1) === "(" || stacked.size() === 2 && string.charAt(stacked.getElement(1)) === "(") {
      for(let jIndex = 0; jIndex < 2; jIndex += 1) {
        stacked.pop()
      }

      if(stacked.longestLength() === 0) {
        stacked.updateLength(2)
      } else {
        stacked.updateLength(stacked.longestLength() + 2)
      }

      return true
    }

    stacked.pop()

    if(stacked.longestLength() > stacked.longestBalanced()) {
      stacked.updateFinalLongest(stacked.longestLength())
   } 
   
   stacked.updateLength(0)

   return true
  }

}

function longestBalancedSubstring(string) {
  // Write your code here.
  debugger
  let stacked = new Stack()

  for(let index = 0; index < string.length; index += 1){
    stacked.push(index)
    update(string, stacked, index)
  }
  
  return stacked.longestBalanced()
}

let answer = longestBalancedSubstring("())()(()())")
console.log("answer", answer)