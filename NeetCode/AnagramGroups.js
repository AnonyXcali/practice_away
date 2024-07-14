class Solution {
  isAnagram(strA, strB) {
    if(!strA || !strB) return false
    if(strA.length != strB.length) return false
    const mapA = {}
    const mapB = {}

    for(let i = 0; i < strA.length; i+= 1) {
      mapA[strA[i]] = (mapA[strA[i]] || 0) + 1
    }

    for(let i = 0; i < strB.length; i+= 1) {
      mapB[strB[i]] = (mapB[strB[i]] || 0) + 1
    }

    const lengthA = Object.keys(mapA).length
    const lengthB = Object.keys(mapB).length

    let flag = true

    // Comparing both maps
    for (let key in mapA) {
      if (mapA[key] !== mapB[key]) {
          return false;
      }
    }

    return flag
  }

  anagramGroups(groups) {
    const result = [] //an empty resultant array
    let tempArray = []  // temp array that would store the possible anagrams
    const check = {} // map that stores if the element was visited?

    //two pointers
    let pointerA = 0
    let pointerB = pointerA + 1 //it would always be ahead

    while(pointerA <= groups.length) { //the loop would exit once pointerA exceeds length
      if(pointerB > groups.length) {
        //push the tempArray with possible anagrams
        if(tempArray && tempArray.length > 0) { //push only array with length greater than 0
          result.push(tempArray)
        }

        //reset the tempArray
        tempArray = []

        //update pointers
        pointerA += 1
        pointerB = pointerA + 1
      } else {
        // here lies the main logic
        //we would mark the current element as visited
        if(!check[groups[pointerA]]) {
          tempArray.push(groups[pointerA])
          check[groups[pointerA]] = true
        }
        
        //now to check the neighbouring/next element is a valid anagram and not visited
        const bool = this.isAnagram(groups[pointerA], groups[pointerB]) && !check[groups[pointerB]]

        if(bool) {
          tempArray.push(groups[pointerB])
          check[groups[pointerB]] = true //marking it as visited
        }
        pointerB += 1
      }
    }

    //return the result (Array)
    return result
  }
}

const groupAna = new Solution()
const arrayOfAnagrams = ["act", "pots", "tops", "cat", "stop", "hat"]
console.log(groupAna.anagramGroups(arrayOfAnagrams))
//[["act", "cat"], ["pots", "tops", "stop"], ["hat"]]