/***
 * Important articles = https://leetcode.com/problems/search-insert-position/solutions/249092/come-on-forget-the-binary-search-pattern-template-try-understand-it/?orderBy=most_votes
 * https://medium.com/swlh/binary-search-find-upper-and-lower-bound-3f07867d81fb
 */

function binarySearch(nums, target) {
  let start = 0
  let end = nums.length - 1
  while(start < end) {
    const mid = Math.floor((start + end) / 2)
    const midValue = nums[mid]
    if(midValue === target) return mid
    
    if(midValue > target) {
        end = mid
    } else {
        start = mid + 1
    }
  }

 return nums[start] < target ? start + 1 : start
}

const arr = [1,3,5,6]
const answer =  binarySearch(arr, 6)

console.log(answer)
