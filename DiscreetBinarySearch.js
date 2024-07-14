/**
 * Question: Find an element in an array, 
 * given a target element such that the element is greater or equal to the target
 */


function DiscreetBinarySearch(space, target, mid) {
  if(space.length < 2) {
    if(space[0] === target) {
      return 0
    } else {
      return -1
    }
  }

  if(space[mid] === target) {
    console.log(space[mid])
    return mid
  }

  if(space[mid] > target) {
    let mod = space.slice(0, mid)
    return DiscreetBinarySearch(mod, target, Math.floor(mod.length / 2))
  } else {
    return DiscreetBinarySearch(space.slice(mid, space.length), target, Math.floor(space.slice(mid, space.length).length / 2))
  }
}

let array = [1, 2, 4, 5, 6, 10, 11, 22, 25, 30, 45, 99]
let ans = DiscreetBinarySearch(array, 22, Math.floor(array.length / 2))
console.log(ans)