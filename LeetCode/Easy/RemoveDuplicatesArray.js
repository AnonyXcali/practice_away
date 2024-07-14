// var removeDuplicates = function(nums) {
//   debugger
//   //iterate over the array
//   //maintain a map to check count

//   if(!nums || nums.length <= 0) return 0

//   const map = {}
//   let maxLength = nums.length

//   let pointer = 0

//   for(let index = 0; index < nums.length; index += 1) {
//       if(!map[nums[index]]) {
//           map[nums[index]] = true
//       } else {
//           nums.splice(index - 1, 1)
//       }
//   }

//   return nums
// };

var removeDuplicates = function(nums) {
  if(nums.length <= 1) {
      return nums.length;
  }
  var k = 1;
  for(var i = 1; i < nums.length; i++) {
      if(nums[i] != nums[i-1]){
          nums[k++] = nums[i];
      }
  }
  console.log(nums)
  return k;
};

const arr = [1, 1,2,3]

const answer = removeDuplicates(arr)

console.log(answer)