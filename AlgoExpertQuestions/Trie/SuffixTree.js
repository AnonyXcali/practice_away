// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    // Write your code here.
    let charLen = string.length
    for(let index = 0; index < string.length; index += 1) {
      let pointer = index
      let currentChar = string.charAt(index)
      let currentNode = this.root
      while(pointer < charLen) {
        currentChar = string.charAt(pointer)
        let node = currentNode[currentChar]
        if(node === null || !node) {
          node = {}
          currentNode[currentChar] = node
        }
        if(pointer === charLen - 1) {
        	currentNode[currentChar]["*"] = true
        }
        currentNode = node
        pointer += 1
      }
    }
  }

  contains(string) {
    // Write your code here.
    let currentNode = this.root
    let stringLength = string.length
    let flag = false

    for(let index = 0; index < stringLength; index += 1) {
      //check if the root consists of the first character
      let currentChar = string.charAt(index)
      let node = currentNode[currentChar]

      if(!node) {
        flag = false
        break
      }

      if(node["*"] && index === stringLength - 1) {
        flag = true
      }
      currentNode = node
    }

    return flag
  }
}