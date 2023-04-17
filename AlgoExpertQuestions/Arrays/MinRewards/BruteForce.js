class Set {
  constructor() {
    this.map = {}
  }

  has(key) {
    return this.map.hasOwnProperty(key)
  }

  set(key, val) {
    this.map[key] = val
  }

  get(key) {
    if(!this.has(key)) {
      return 1
    } else {
      return this.map[key]
    }
  }

  sum() {
    let sum = 0
    Object.values(this.map).forEach(item => {
      sum = sum + item
    })

    return sum
  }

  print() {
    return this.map
  }
}


// function incrementPre(array, set) {
//   for(let index = 0; index < array.length; index++) {
//     if(array[index] > array[index + 1]) {
//       set.set(array[index], set.get(array[index]) + 1)
//     } else if(array[index + 1] === undefined){
//       set.set(array[index], set.get(array[index]) + 1)
//     }
//   }
// }

function incrementPre(array, set) {
  for(let index = array.length - 1; index > - 1; index--) {
    if(array[index] < array[index - 1]
      || array[index - 1] === undefined) {
      set.set(array[index], set.get(array[index]) + 1)
    } else if(array[index - 1] < array[index]) {
      set.set(array[index], set.get(array[index]) + 1)
      break
    }
  }
}



function minRewards(scores) {
  //debugger
  let rewardSet = new Set()
  let trail = 0

  for(let index=0; index < scores.length; index++) {
    trail = index - 1
    //console.log(rewardSet.print())
    if(scores[trail] === undefined) {
      rewardSet.set(scores[index], 1)
    } else if(scores[index] < scores[trail]) {
      let prevTrail = scores[trail - 1]
      if(prevTrail !== undefined && prevTrail < scores[trail]) {
        rewardSet.set(scores[index], 1)
      } else {
        incrementPre(scores.slice(0, index), rewardSet)
        rewardSet.set(scores[index], rewardSet.get(scores[trail]) - 1)
      }
    } else if(scores[index] > scores[trail]) {
      rewardSet.set(scores[index], rewardSet.get(scores[trail]) + 1)
    }
  }

  for(let index = 0; index < scores.length; index++) {
    console.log(scores[index] , ":", rewardSet.get(scores[index]))
  }

  return rewardSet.sum()
}

const arr = [10, 5]
const arr2 = [8, 4, 2, 1, 3, 6, 7, 9, 5]
const arr3 = [0, 4, 2, 1, 3]
const arr4 = [800, 400, 20, 10, 30, 61, 70, 90, 17, 21, 22, 13, 12, 11, 8, 4, 2, 1, 3, 6, 7, 9, 0, 68, 55, 67, 57, 60, 51, 661, 50, 65, 53]
const ans = minRewards(arr4)
console.log(ans)

console.log(4 + 3 + 2 + 1+ 2+ 3+ 4+ 5+ 1+ 2+ 8+ 7+ 6+ 5+ 4+ 3+ 2+ 1+ 2+ 3+ 4+ 5+ 1+ 2+ 1+ 2+ 1+ 2+ 1+ 2+ 1+ 2+ 1)
/**
 * {2: 1, 4: 2, 8: 3, 10: 1, 11: 4, 12: 5, 13: 6, 17: 1, 20: 2, 21: 2, 22: 8, 30: 2, 61: 3, 70: 4, 90: 5, 400: 3, 800: 4}
 * {1: 1, 2: 2, 4: 3, 8: 4, 10: 1, 11: 5, 12: 6, 13: 7, 17: 1, 20: 2, 21: 2, 22: 9, 30: 2, 61: 3, 70: 4, 90: 5, 400: 3, 800: 4}
 */