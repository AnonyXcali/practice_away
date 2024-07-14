class Solution {
  /**
   * @param {string} stringA
   * @param {string} stringB
   * @return {boolean}
   */
  isAnagram(stringA, stringB) {
      if (stringA.length !== stringB.length) {
          return false;
      }

      let mapA = {};
      let mapB = {};

      // Mapping String A to Map A
      for (let char of stringA) {
          mapA[char] = (mapA[char] || 0) + 1;
      }

      // Mapping String B to Map B
      for (let char of stringB) {
          mapB[char] = (mapB[char] || 0) + 1;
      }

      // Comparing both maps
      for (let key in mapA) {
          if (mapA[key] !== mapB[key]) {
              return false;
          }
      }

      return true;
  }
}

const anagramSoul = new Solution();
const A = "racecar";
const B = "carracer";
console.log(anagramSoul.isAnagram(A, B)); // true
