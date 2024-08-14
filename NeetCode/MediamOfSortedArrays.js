class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays_naive(nums1, nums2) {
    let combined = [...nums1, ...nums2]
    let sorted = combined.sort((a, b) => a - b)
    let len = sorted.length

    if(len % 2 === 0) {
      let p1 = sorted[(Math.floor(len/2)) - 1]
      let p2 = sorted[Math.floor(len/2)]

      return (p1 + p2) / 2
    }

    return sorted[Math.floor(len / 2)]
  }

  findMedianSortedArrays(nums1, nums2) {
    let m = nums1.length
    let n = nums2.length

    if(n < m) {
      return this.findMedianSortedArrays(nums2, nums1)
    }

    let left = 0
    let right = m
    let totalLength = m + n
    let halfLength = Math.floor((totalLength + 1) / 2)

    while(left < right) {
      let partitionX = Math.floor((left + right) / 2) 
      let partitionY = Math.abs(halfLength - partitionX)
      
      let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1]
      let minRightX = partitionX < right ? nums1[partitionX] : Infinity
      let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1]
      let minRightY = partitionY < n ? nums2[partitionY] : Infinity

      if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
        if(totalLength % 2 === 0) {
          let max = Math.max(maxLeftX, maxLeftY)
          let min = Math.min(minRightX, minRightY)
          return (max+min) / 2
        } else {
          return Math.max(maxLeftX, maxLeftY)
        }
      } else if(maxLeftX > minRightY) {
        right = partitionX - 1
      } else {
        left = partitionX + 1
      }
    }
  }
}


function main() {
  let a = [1,3]
  let b = [2]
  let sol = new Solution()
  let ans = sol.findMedianSortedArrays(a, b)
  console.log(ans)
}

main()
