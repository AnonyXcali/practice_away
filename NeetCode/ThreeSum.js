class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums, target) {
    let sorted = nums.sort()
    let leftPointer = 0
    let rightPointer = 0
    let result = []

    for(let i = 0; i < sorted.length; i += 1) {
      if (i > 0 && sorted[i] === sorted[i - 1]) {
        continue; // Skip duplicates
      }
      leftPointer = i + 1
      rightPointer = sorted.length - 1
      while(leftPointer < rightPointer) {
        let sum = sorted[i] + sorted[leftPointer] + sorted[rightPointer]
        if(sum === target) {
          result.push([sorted[i], sorted[leftPointer], sorted[rightPointer]])
          while (leftPointer < rightPointer && sorted[leftPointer] === sorted[leftPointer + 1]) leftPointer += 1; // Skip duplicates
          while (leftPointer < rightPointer && sorted[rightPointer] === sorted[rightPointer - 1]) rightPointer -= 1; // Skip duplicates
          leftPointer += 1
          rightPointer -= 1
        } else if(sum < target) {
          leftPointer += 1
        } else {
          rightPointer -= 1
        }
      }
    }
    return result
  }

  mergeSort(arr) {
    if(arr.length < 2) return arr
    let mid = Math.floor(arr.length / 2)
    let leftArray = arr.slice(0, mid)
    let rightArray = arr.slice(mid, arr.length)

    return this.merge(this.mergeSort(leftArray), this.mergeSort(rightArray))
  }

  merge(leftArray, rightArray) {
    let leftPointer = 0
    let rightPointer = 0
    let result = []

    while(leftPointer < leftArray.length && rightPointer < rightArray.length) {
      if(leftArray[leftPointer] < rightArray[rightPointer]) {
        result.push(leftArray[leftPointer])
        leftPointer += 1
      } else {
        result.push(rightArray[rightPointer])
        rightPointer += 1
      }
    }

    return result.concat(leftArray.slice(leftPointer).concat(rightArray.slice(rightPointer)))
  }
}

function main() {
  let nums = [-1,0,1,2,-1,-4]
  let sol = new Solution()
  const ans = sol.threeSum(nums, 0)
  console.log(ans.toString())
}

main()