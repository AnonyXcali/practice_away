function mergeArrays(nums1, m, nums2, n) {

  if(m === 0) {
    nums1.splice(0, nums1.length)
  } else if(nums1.length !== m) {
    nums1.splice(m, nums1.length)
  }

  // console.log(nums1)

  if(n === 0) {
    nums2.splice(0, nums2.length)
  } else if(nums2.length !== n) {
    nums2.splice(n, nums2.length)
  } 

  console.log(nums2)

  nums1.splice(nums1.length, 0, ...nums2)
  nums1.sort((a,b) => a - b)

  // nums1.splice(m, nums1.length - m);
    
  //   var i = 0;
  //   var j = 0;
    
  //   while (j < nums2.length) {
  //       if (nums1[i] === undefined || nums1[i] > nums2[j]) {
  //           nums1.splice(i, 0, nums2[j]);
  //           j++;
  //           i++;
  //       } else {
  //           i++;
  //       }
  //   }

    return nums1
}

const arr1 = [
  -10,-10,-9,-9,-9,-8,-8,-7,-7,-7
  ,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,
  -4,-4,-4,-3,-3,-2,-2,-1,-1,0
  ,1,1,1,2,2,2,3,3,3,4
  ,5,5,6,6,6,6,7,7,7,7
  ,8,9,9,9,9,
  
  0,0,0,0,0,0
  ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const arr2 = [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9]
const ans = mergeArrays(arr1, 55, arr2, 99)
console.log(ans)

