/**
 * Q: Find Target in Rotated Sorted Array
 * You are given an array of length n which was originally 
 * sorted in ascending order. It has now been rotated between 1 and n times. For example, the array nums = [1,2,3,4,5,6] might become:
 * 
 * [3,4,5,6,1,2] if it was rotated 4 times.
 * [1,2,3,4,5,6] if it was rotated 6 times.
 * Given the rotated sorted array nums and an integer target, 
 * return the index of target within nums, or -1 if it is not present.
 * 
 * You may assume all elements in the sorted rotated array nums are unique,
 * 
 * A solution that runs in O(n) time is trivial, can you write an algorithm 
 * that runs in O(log n) time?
 */

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
      let mid = Math.floor((left + right) / 2)

      if(nums[mid] === target) return mid
      if(nums[left] === target) return left
      if(nums[right] === target) return right
      if(nums[mid - 1] === target) return mid - 1
      if(nums[mid + 1] === target) return mid + 1

      if((target > nums[left] && target < nums[mid])) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return -1
  }

  search_optimized(nums, target) {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
      let mid = Math.floor((left + right) / 2)
      if(nums[mid] === target) return mid

      if(nums[left] <= nums[mid]) {
        if(nums[left] <= target && nums[mid] > target) {
          right = mid - 1
        } else {
          left = mid + 1
        }
      } else {
        if(nums[mid] < target && target <= nums[right]) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
    }

    return -1
  }

  search_II(nums, target) {
    for(let i = 0; i < nums.length; i += 1) {
      let currentArr = this.pivot(nums, i)
      console.log(currentArr)
      if(this.search_optimized(currentArr, target)) {
        return true
      }
    }
    return false
  }

  pivot(arr, pIndex) {
    let grab = arr.slice(pIndex)
    console.log(grab)
    arr.splice(0,0, ...grab)
    arr.splice(pIndex * 2, grab.length)
    return arr
  }
}

function main() {
  //[5,1,2,3,4]
  //[3,4,5,6,1,2]
  let arr = [2,5,6,0,0,1,2]
  let ooga = [1, 0, 1, 1, 1]
  let splicer = [0, 1, 2, 4, 4, 4, 5, 6, 6, 7]
  let sol = new Solution()
  let ans = sol.pivot(ooga, 4)
  console.log(ans)
}

main()