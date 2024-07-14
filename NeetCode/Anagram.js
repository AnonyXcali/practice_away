class Solution {

  isAnagram(stringA, stringB) {
    let mapA = {}
    let mapB = {}

    /*Mapping String A to Map A*/
    for(let i in stringA) {
      if(mapA[stringA[i]]) {
        mapA[stringA[i]] += 1
      } else {
        mapA[stringA[i]] = 1
      }
    }

    /*Mapping String B to Map B*/
    for(let i in stringB) {
      if(mapB[stringB[i]]) {
        mapB[stringB[i]] += 1
      } else {
        mapB[stringB[i]] = 1
      }
    }

    const lengthA = Object.keys(mapA).length || 0
    const lengthB = Object.keys(mapB).length || 0

    //Checking if the map's lengths are different then it's
    //not an Anagram
    if(lengthA !== lengthB) {
      return false
    }

    /*Let's assume the given strings are anagrams*/
    let flag = true

    Object.keys(mapA).forEach(key => {
      if((mapA[key] !== mapB[key]) //if values on either side don't match
      || (!mapA[key] && mapB[key]) //if value on mapA don't exist
      || (!mapB[key] && mapA[key])) { //if value on mapB don't exist
        flag = false
      }
    })

    return flag
  }
  

  optimized(a, b) {
    let map = {}

    let sortedA = a.split("").sort().join("")

    map[sortedA] = a

    let sortedB = b.split("").sort().join("")

    if(map[sortedB]) {
      return true
    }

    return false
  }

}

const anagramSoul = new Solution
const A = "racecar"
const B = "caracer"
console.log(anagramSoul.optimized(A, B))
