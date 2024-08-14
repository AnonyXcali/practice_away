/**
 * Q: Smallest Subarray
 * Return the length of the smallest possible subarray 
 * such that its sum is greater than or equal to K
 */


class Solution {
  smallestSubArray(arr, k) {
    let minimumWindow = Infinity
    let windowStart = 0
    let runningSum = 0

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd+= 1) {
      runningSum += arr[windowEnd]
      
      while(runningSum >= k) {
        minimumWindow = Math.min(minimumWindow, windowEnd - windowStart + 1)
        if(minimumWindow === 1) {
          return 1
        }
        runningSum -= arr[windowStart]
        windowStart += 1
      }
    }
    return minimumWindow
  }
}

function main() {
  let arr = [4, 2, 2, 7, 8, 1, 2, 8 , 10]
  let k = 8
  let sol = new Solution()
  let ans = sol.smallestSubArray(arr, k)
  console.log(ans)
}

main()