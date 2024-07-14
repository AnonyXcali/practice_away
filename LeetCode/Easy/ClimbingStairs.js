var climbStairs = function(n) {
    
  //what do we know
  /**
      no of steps min = 1
      no of steps max = 2

      we always know the minimum possible number
      of steps to reach an nth position is atleast 1 step

      its a modified version of fibonacci
      https://zyrastory.com/en/coding-en/leetcode-en/leetcode-70-climbing-stairs-solution-and-explanation-en/
   */

   if(n < 2) return n

   let arr = [1,2];
  for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
  }
  return arr[n-1]
};
