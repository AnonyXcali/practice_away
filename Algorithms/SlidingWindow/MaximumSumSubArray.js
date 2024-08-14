/**
 * Q: Max Sum in Subarray for fixed size K
 * 
 * Find the maximum sum of a sub array that is limited to the constraint size of K
 */

class Solution {
  findMaxSubArray(arr, k) {
    let maxValue = -Infinity
    let runningSum = 0

    for(let i = 0; i < arr.length; i += 1) {
      runningSum += arr[i]
      if(i >= k - 1) {
        maxValue = Math.max(maxValue, runningSum)
        runningSum -= arr[i - (k - 1)]
      }
    }
    return maxValue
  }
}


function main() {
  let arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
  let k = 3
  let sol = new Solution()
  let ans = sol.findMaxSubArray(arr, k)
  console.log(ans)
}

main()