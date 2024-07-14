class Solution {
  longestConsecutive(nums) {
    let count = 1 

    if(nums.length === 1) return count //a single element is the longest sequence

    const map = {} //we shall store the visited elements

    let pointerA = 0
    let pointerB = nums.length - 1

    while(pointerA <= pointerB) {

      const isOneGreater = Math.abs(nums[pointerA] - nums[pointerB]) === 1 // calculate absolute value

      if(isOneGreater && (!map[pointerA] && !map[pointerB])) {
        count += 1 // we have a greater number sequence

        //we need to find the next greater than 1 integer for the biggest number between
        //pointerA & pointerB

        if(nums[pointerA] < nums[pointerB]) {
          pointerA += 1
        } else {
          pointerB -= 1
        }
        
      } else if(map[nums[nums.indexOf(Math.max(nums[pointerA], nums[pointerB]))] + 1]){
        count += 1
        if(nums[pointerA] > nums[pointerB]) {
          pointerA += 1
        } else {
          pointerB += 1
        }
      } else if(nums[pointerA] < nums[pointerB]) {
        pointerB -= 1
      } else {
        pointerA += 1
      }

      map[nums[pointerA]] = true
      map[nums[pointerB]] = true
    }
  }

  optimizedLongestSequence(nums) {
    let setMap = new Set([...nums])
    let longest = 0

    for(let n of nums) {
      if(!setMap.has(n - 1)) {
        let length = 1
        while(setMap.has(n + length)) {
          length += 1
        }

        longest = Math.max(longest, length)
      }
    }

    return longest
  }
}