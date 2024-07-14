class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    let product = 1
    const result = []
    let ptr = 0

    while(ptr < nums.length) {
      for(let num of nums) {
        if(num !== nums[ptr]) {
          product *= num
        }
      }

      result.push(product)
      product = 1
      ptr += 1
    }

    return result

  }

  productExceptSelfOptimized(nums) {
    const product = [...nums].reduce((a,b) => {
      return a * b
    }, 1)
    
    const answer = [...nums].map(item => product / item)

    return answer
  }
}


const selfProd = new Solution().productExceptSelfOptimized([1,2,4,6])
console.log(selfProd)