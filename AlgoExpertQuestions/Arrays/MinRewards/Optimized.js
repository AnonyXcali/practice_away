/*
Local Minima Solution

- Expand from left to right
  - Compare the previous number if previous number exists.
  - If Current number is GREATER than previous number dont do anything
  - if Current number is SMALLER than previous
   - add 1 to current number
  - Do the followin until array's length

- Expand from right to left
 - Compare the next number with current
 - If next number is smaller than current
  - Change the current number to max of ( current Number value vs next number value + 1)
 - Do the followin until index is GREATER than -1


- Sum the array
- return the sum
*/

function minRewards(scores) {
  let rewards = Array(scores.length).fill(1, 0)

  for(let index = 1; index < scores.length; index++){
    if(scores[index] > scores[index - 1]) {
      rewards[index] = rewards[index - 1] + rewards[index]
    }
  }

  for(let index = scores.length - 2; index > -1; index--){
    if(scores[index] > scores[index + 1]) {
      rewards[index] = Math.max(rewards[index + 1] + 1, rewards[index])
    }
  }
  
  const sum = rewards.reduce((a,b) => a + b)
  
  return sum
}

const arr = [8, 4, 2, 1, 3, 6, 7, 9, 5]
const ans = minRewards(arr)
console.log(ans)