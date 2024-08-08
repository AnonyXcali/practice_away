/**
 * Q: Find Minimum in Rotated Sorted Array
 * You are given an array of length n which was originally sorted 
 * in ascending order. It has now been rotated between 1 and n times. 
 * For example, the array nums = [1,2,3,4,5,6] might become:
 * 
 * [3,4,5,6,1,2] if it was rotated 4 times.
 * [1,2,3,4,5,6] if it was rotated 6 times.
 * 
 * Notice that rotating the array 4 times moves the last four elements of 
 * the array to the beginning. Rotating the array 6 times produces the original array.
 * 
 * Assuming all elements in the rotated sorted array nums are unique, return the minimum 
 * element of this array.
 * 
 * A solution that runs in O(n) time is trivial, can you write an algorithm that runs 
 * in O(log n) time?
 */

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums) {
    let leftPointer = 0
    let rightPointer = nums.length - 1
    let currentMin = nums[0]

    while(leftPointer <= rightPointer) {
      let mid = Math.floor((leftPointer + rightPointer) / 2)
      currentMin = Math.min(currentMin, nums[mid])
      
      let currentLeft = nums[leftPointer]
      let currentRight = nums[rightPointer]

      if(currentLeft < currentRight) {
        rightPointer = mid
      } else {
        if(currentLeft > nums[mid]) {
          rightPointer = mid - 1
        } else {
          leftPointer = mid + 1
        }
      }
    }
    
    return currentMin
  }

  findMin_gpt(nums) {
    let leftPointer = 0
    let rightPointer = nums.length - 1

    while(leftPointer < rightPointer) {
      let mid = Math.floor((leftPointer + rightPointer) / 2)

      if(nums[mid] > nums[rightPointer]) {
        leftPointer = mid + 1
      } else {
        rightPointer = mid
      }
    }
    return nums[leftPointer]
  }
}


function main() {
  //[5,1,2,3,4]
  //[3,4,5,6,1,2]
  let arr = [3,4,5,6,1,2]
  let sol = new Solution()
  let ans = sol.findMin_gpt(arr)
  console.log(ans)
}

main()
