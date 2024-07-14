// Javascript Program to find the longest common
    // prefix of the given words
     
    const ALPHABET_SIZE = 26;
     
    // Converts key current character into index
    // use only 'a' through 'z' and lower case
    const CHAR_TO_INDEX = (c) => c.charCodeAt(0) - 'a'.charCodeAt(0);
     
    // Trie node
    class TrieNode {
      constructor() {
        this.children = Array(ALPHABET_SIZE).fill(null);
        this.isLeaf = false;
      }
    }
     
    // Returns new trie node (initialized to NULLs)
    const getNode = () => new TrieNode();
     
    // If not present, inserts the key into the trie
    // If the key is a prefix of trie node, just marks leaf node
    const insert = (root, key) => {
      console.log(key)
      let length = key.length; // 4
      let index;
     
      let pCrawl = root; // {}
     
      for (let level = 0; level < length; level++) {
        index = CHAR_TO_INDEX(key[level]); //geek[0]// 103

         /**
          *  {
          *    children : [null,...... 26th(null)],
          *    isLeaf : null 
          *  }
          */
        if (!pCrawl.children[index]) {
          pCrawl.children[index] = getNode();
        }
     
        pCrawl = pCrawl.children[index];
      }
     
      // mark last node as leaf
      pCrawl.isLeaf = true;
    };
     
    // Counts and returns the number of children of the
    // current node
    const countChildren = (node, index) => { // { .... }, []
      let count = 0; // 1
      for (let i = 0; i < ALPHABET_SIZE; i++) {
        if (node.children[i] != null) {
          count++;
          index[0] = i;
        }
      }
      return count;
    };
     
    // Perform a walk on the trie and return the
    // longest common prefix string
    const walkTrie = (root) => {
      let pCrawl = root; // {}
      let index = []; // []
      let prefix = ""; // ""

     
      while (countChildren(pCrawl, index) === 1 && !pCrawl.isLeaf) { // {}, a
        pCrawl = pCrawl.children[index[0]]; //a, b
        prefix += String.fromCharCode("a".charCodeAt(0) + index[0]); //a
        console.log(prefix)
      }
      return prefix;
    };
     
    // A Function to construct trie
    function constructTrie(arr, n, root) {
      //["geek", "geek", "geek", "geek"], 4, {}
      for (let i = 0; i < n; i++) {
        //{}, geek
        insert(root, arr[i]);
      }
      return;
    };
     
    // A Function that returns the longest common prefix
    // from the array of strings
    function commonPrefix(arr, n) {
      let root = getNode(); //creates a {} root node

      // passes ["geek", "geek", "geek", "geek"], 4, {}
      constructTrie(arr, n, root);
     
      // Perform a walk on the trie
      return walkTrie(root);
    };
     
    // Driver program to test above function
      let arr = ["ab", "a"];
      let n = arr.length;
     
      let ans = commonPrefix(arr, n);
     
      if (ans.length) {
        console.log("The longest common prefix is "+ans);
      }
      else
      {
          console.log("There is no common prefix");
      }