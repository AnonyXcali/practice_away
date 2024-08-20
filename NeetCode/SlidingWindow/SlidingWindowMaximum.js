class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    let tail = 0
    let head = k - 1
    let result = []

    while(head < nums.length) {
      let currMax = -Infinity
      for(let i = tail; i <= head; i += 1) {
        currMax = Math.max(nums[i], currMax)
      }
      result.push(currMax)
      tail += 1
      head += 1
    }

    return result
  }

  maxSlidingWindow_optimized(nums, k) {
    let dequeue = []
    let head = 0
    let tail = 0
    let result = []
    

    while(head < nums.length) {
      while(dequeue.length > 0 && nums[head] > nums[dequeue[dequeue.length - 1]]) {
        dequeue.pop()
      }

      dequeue.push(head)

      if(tail > dequeue[0]) {
        dequeue.shift()
      }

      if(head + 1 >= k) {
        result.push(nums[dequeue[0]])
        tail += 1
      } 

      head += 1

    }

    return result

  }
}

function main() {
  let nums = [1,2,1,0,4,2,6], k = 3
  let sol = new Solution()
  let ans = sol.maxSlidingWindow_optimized(nums, k)
  console.log(ans)
}

main()


