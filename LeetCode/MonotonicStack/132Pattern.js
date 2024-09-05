/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  if(nums.length < 3) return false
  let stack = []
  let maxK = -Infinity
  
  for(let i = nums.length - 1; i >= 0; i-=1) {
    if(nums[i] < maxK) return true //1 candidate 
    
    while(stack.length && stack[stack.length - 1] < nums[i]) {
      maxK = stack.pop() // 2 candidate
    }

    stack.push(nums[i]) // 3 candidate
  }

  return false
};