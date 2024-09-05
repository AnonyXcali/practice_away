/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let leftPointer = 0 //copy
  let rightPointer = 0 //nums2
  let pointer = 0 //nums1

  let arrayOne = nums1.slice(0, m)
  let arrayTwo = nums2.slice(0, n)

  while(pointer <  m + n) {
    if(rightPointer >= n || ( leftPointer < m && arrayOne[leftPointer] <= arrayTwo[rightPointer]) ) {
      nums1[pointer] = arrayOne[leftPointer]
      leftPointer += 1
    } else {
      nums1[pointer] = arrayTwo[rightPointer]
      rightPointer += 1
    }
    pointer += 1
  }

};

const merge_reverse = function(nums1, m, nums2, n) {
  let p1 = m - 1 //nums1
  let p2 = n - 1 //nums2
  let p = m + n - 1

  for(let i = p; p >= 0; p -= 1) {
    if(nums1[p1] <= nums2[p2]) {
      nums1[i] = nums2[p2]
      p2 += 1
    } else {
      nums1[i] = nums2[p1]
      p1 += 1
    }
  }
}