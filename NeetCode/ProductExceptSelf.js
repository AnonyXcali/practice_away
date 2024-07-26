class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf_naive(nums) {
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

   /**
     * @param {number[]} nums
     * @return {number[]}
     */
   productExceptSelf(nums) {
    const n = nums.length;
    const result = Array(n).fill(1);

    //[1, 1, 2, 8]
    //prefix: 8
    // Calculate prefix values
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    console.log(result, prefix)

    //[1, 1, 2, 8]
    // Calculate suffix values
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}
}


const selfProd = new Solution().productExceptSelf([1,2,4,6])
console.log(selfProd)