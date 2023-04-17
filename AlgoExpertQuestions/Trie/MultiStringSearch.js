class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(string) {
    let current = this.root
    for(let index = 0; index < string.length; index += 1) {
      let currentChar = string.charAt(index)
      let node = current.children[currentChar]

      if(!node) {
        node = new TrieNode()
        current.children[currentChar] = node
      }

      current = node
    }

    current.lastWord = string
  }

  contains(string, startIndex, mappedString) {
    let current = this.root
    let flag = false

    
    for(let index = startIndex; index < string.length; index += 1) {
      let currentChar = string.charAt(index)
      let node = current.children[currentChar]
      
      if(!node) {
        break
      }

      current = node

      if(node.lastWord) {
        mappedString[current[lastWord]] = true
      }

    }
  }
}

class TrieNode {
  constructor() {
    this.children = {}
    this.lastWord = false
  }
}

function multiStringSearch(bigString, smallStrings) {
  // Write your code here.
  const bigStringSplit = bigString.split(" ")
  const trieTree = new Trie()

  for(let index = 0; index < smallStrings.length; index += 1) {
    trieTree.insert(smallStrings[index])
  }

  let containedStrings = {}

  for(let index = 0; index < bigString.length; index += 1) {
     trieTree.contains(bigString, index, containedStrings)
  }


  return smallStrings
}