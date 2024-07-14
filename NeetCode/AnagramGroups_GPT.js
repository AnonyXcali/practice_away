class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(words) {
      const map = {};
      // Iterate over each word in the input array
      for (let word of words) {
          // Sort the word
          const sortedWord = word.split('').sort().join('');

          // Add the word to the corresponding group in the map
          if (map[sortedWord]) {
              map[sortedWord].push(word);
          } else {
              map[sortedWord] = [word];
          }
      }

      // Return the values of the map, which are the groups of anagrams
      return Object.values(map);
  }
}
