var removeElement = function(nums, val) {
  //brute force solution

  let actualLengthWithoutTargetValue = nums.length

  for(let index = 0; index < nums.length; index +=1) {
      if(nums[index] === val) {
          actualLengthWithoutTargetValue -= 1
      }
  }

  return actualLengthWithoutTargetValue
};

const arr = [3,2,2,3]
const answer = removeElement(arr, 3)
console.log(answer)