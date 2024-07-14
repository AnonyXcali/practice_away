class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(string) {
     let currentNode = this.root
     const stringLength = string.length
     for(let index = 0; index < stringLength; index += 1) {
       console
       let char = string.charAt(index)
       let node = currentNode.children[char]

       if(!node || node === null) {
         node = new TrieNode()
         currentNode.children[char] = node 
       }
       currentNode = node
     }

     currentNode.endWord = true
  }

  printTree() {

  }

  prefixSearch(string) {
    let current = this.root
    let map = string.split("").map((char) => {
      return {
        [char]: false,
      }
    })

    for(let index = 0; index < string.length; index += 1) {
      
    }

  }

  search() {
    // let current = this.root
    // while(!current.endWord) {

    // }
  }
}

class TrieNode {
  constructor() {
    this.children = {}
    this.endWord = false
  }
}


const someString = "tttt"
const wordToSearch = someString
const trieTree = new Trie()
trieTree.insert(someString)
