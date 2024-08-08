/**
 * Q: Trapping Rain Water
 * You are given an array non-negative integers heights which 
 * represent an elevation map. Each value heights[i] represents the height of a bar, 
 * which has a width of 1.
 * 
 * Return the maximum area of water that can be trapped between the bars.
 */

class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let maxLeftValues = []
    let maxRightValues = []
    let minValues = []
    let waterTrap = []
    let maxLeft = 0
    let maxRight = 0

    for (let i = 0; i < height.length; i += 1) {
      maxLeftValues[i] = maxLeft
      maxLeft = Math.max(height[i], maxLeft)
      console.log(height[i], maxLeft)
    }

    for(let i = height.length - 1; i >= 0; i -= 1) {
      maxRightValues[i] = maxRight
      maxRight = Math.max(height[i], maxRight)
    }

    for(let i = 0; i < height.length; i += 1) {
      minValues[i] = Math.min(maxLeftValues[i], maxRightValues[i])
    }

    for(let i = 0; i < height.length; i += 1) {
      let calc = minValues[i] - height[i]
      waterTrap[i] = calc >= 0 ? calc : 0
    }

    return waterTrap.reduce((a, b) => a + b, 0)
  }

  trap_optimized(height) {
    if(!height) return 0

    let leftPointer = 0
    let rightPointer = height.length - 1
    let result = 0
    let leftMax = height[leftPointer]
    let rightMax = height[rightPointer]

    while(leftPointer < rightPointer) {
      if(leftMax < rightMax) {
        leftPointer += 1
        leftMax = Math.max(height[leftPointer], leftMax)
        result += leftMax - height[leftPointer]
      } else {
        rightPointer -= 1
        rightMax = Math.max(height[rightPointer], rightMax)
        result += rightMax - height[rightPointer]
      }
    }

    return result
  }
}


function main() {
  let test = [0,2,0,3,1,0,1,3,2,1]
  let nc = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  let heights = [4,2,0,3,2,5]
  let sol = new Solution()
  let ans = sol.trap_optimized(heights)
  console.log(ans)
}

main()