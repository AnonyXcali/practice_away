/**
 * Q: Make Two Arrays Equal by Reversing Subarrays
 * 
 * You are given two integer arrays of equal length 
 * target and arr. In one step, you can select any non-empty subarray 
 * of arr and reverse it. You are allowed to make any number of steps.
 * 
 * Return true if you can make arr equal to target or false otherwise.
 */


/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
  //debugger
  if(target.length !== arr.length) return false
  let head = 0
  let tail = 0
  let outer = 0

  while(outer < target.length) {
    let curr = target[outer] //we each element with the arr's head
    console.log(curr)
    if(head < target.length) {
      while(arr[head] && arr[head] !== curr) {
        head += 1
      }

      console.log(head)

      if(!arr[head]) {
        //we search using tail
        while(arr[tail] && arr[tail] !== curr) {
          tail += 1
        }

        if(!arr[tail]) {
          return false
        }

        [arr[tail], arr[head]] = [arr[head], arr[tail]]

      } else {
        [arr[tail], arr[head]] = [arr[head], arr[tail]]
        console.log(arr)
        tail += 1
        outer += 1
      }      
    }
  }

  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] !== target[i]) return false
  }

  return true
}

function main() {
  let arr1 = [1,2,3,4]
  let arr2 = [4,3,1,2]
  let ans = canBeEqual(arr1, arr2)
  console.log(ans)
}

main()