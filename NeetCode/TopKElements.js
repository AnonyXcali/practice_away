class Solution {
  topKElements(nums, k) {
    let map = {}
    
    for(let i in nums) {
      map[nums[i]] = (map[nums[i]] || 0) + 1
    }

    let decreasingFrequency = Object.keys(map).sort((a,b) => map[b] - map[a])

    return decreasingFrequency.slice(0, k).map(Number)
  }
}

const kElements = new Solution()
const numbers = [1,2,2,3,3,3]
console.log(kElements.topKElements(numbers, 2))