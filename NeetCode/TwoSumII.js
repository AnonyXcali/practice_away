/**
 * Q Two Integer Sum II
 * Given an array of integers numbers that is sorted in non-decreasing order.
 * Return the indices (1-indexed) of two numbers, [index1, index2], 
 * such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
 * 
 * There will always be exactly one valid solution.
 * Your solution must use O(1) additional space.
 */

class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let leftPointer = 0
    let rightPointer = numbers.length - 1

    while(leftPointer < rightPointer) {
      let sum = numbers[leftPointer] + numbers[rightPointer];
      if(sum === target) {
        return [leftPointer + 1, rightPointer + 1]
      } else if(sum < target) {
        leftPointer += 1
      } else {
        rightPointer -= 1
      }
    }

    return []
  }
}

function main() {
  let sol = new Solution()
  let arr = [1, 2, 3, 4]
  let ans = sol.twoSum(arr, 3)
  console.log(ans)
}

main()
