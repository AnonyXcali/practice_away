/**
 * Q: Max Water Container
 * You are given an integer array heights where heights[i] 
 * represents the height of the ith bar.

You may choose any two bars to form a container. Return the maximum 
amount of water a container can store.
 */

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let maxAreaOfWater = 0
    for(let i = 0; i < heights.length; i += 1) {
      for(let j = i + 1; j < heights.length; j += 1) {
        let width = j - i
        let diffOfHeight = Math.abs(heights[i] - heights[j])
        let calculatedHeight = Math.max(heights[i], heights[j]) - diffOfHeight
        maxAreaOfWater = Math.max(calculatedHeight * width, maxAreaOfWater)
        console.log(maxAreaOfWater, i, j)
      }
    }
    return maxAreaOfWater
  }

  maxArea_II(heights) {
    let leftPointer = 0
    let rightPointer = heights.length - 1
    let maxAreaOfWater = 0
    
    while(leftPointer < rightPointer) {
      let width = rightPointer - leftPointer
      let diffInHeight = Math.abs(heights[leftPointer] - heights[rightPointer])
      let calculatedHeight = Math.max(heights[leftPointer], heights[rightPointer]) - diffInHeight
      maxAreaOfWater = Math.max(calculatedHeight * width, maxAreaOfWater)

      if(heights[leftPointer] < heights[rightPointer]) {
        leftPointer += 1
      } else {
        rightPointer -= 1
      }
    }
    return maxAreaOfWater
  }
}

function main() {
  let heights = [0,2,0,3,1,0,1,3,2,1]
  let sol = new Solution()
  let ans = sol.maxArea(heights)
  console.log(ans)
}

main()