class Solution {

  twoSum(nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i]
      if(diff in map) {
        return [map[diff], i]
      } else {
        map[nums[i]] = i
      }
    }
  }

}


const nums = [3,4,5,6]
const twoSoul = new Solution
console.log(twoSoul.twoSum(nums, 8))