class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let selectedRow = null

    for(let i = 0; i < matrix.length; i += 1) {
      console.log(target >= matrix[i][0], target <= matrix[i][matrix.length - 1], matrix[i][matrix.length - 1])
      if(target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
        selectedRow = matrix[i]
        break
      }
    }

    if(!selectedRow) {
      return false
    }

    console.log(selectedRow)
    return this.binarySearch(selectedRow, target)
  }

  binarySearch(nums, target) {
    let leftPointer = 0
    let rightPointer = nums.length - 1
    
    while(leftPointer <= rightPointer) {
      let mid = Math.floor((leftPointer + rightPointer) / 2)
      if(nums[mid] === target) return true 

      if(target > nums[mid]) {
        leftPointer = mid + 1
      } else {
        rightPointer = mid - 1
      }
    }

    return false
  }
}


function main() {
  let minTest = [[1,3]]
  let matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]]
  let target = 3
  let sol = new Solution()
  let ans = sol.searchMatrix(minTest, target)
  console.log(ans)
}

main()