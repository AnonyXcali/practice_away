class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
      const map = {}
      for(let i in nums) {
          if(map[nums[i]]) {
              return true
          } else {
              map[nums[i]] = true
          }
      }
      return false
  }
}


const soul = new Solution
const nums = [1,2,3,4]
  console.log(soul.hasDuplicate(nums))

