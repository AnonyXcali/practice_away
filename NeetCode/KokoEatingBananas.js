class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let highest = Math.max(...piles)
    let rate = highest

    let k = 1

    while(k <= highest) {
      let currentHourCount = 0
      for(let j = 0; j < piles.length; j += 1) {
        currentHourCount += Math.ceil(piles[j] / k)
      }
      if(currentHourCount <= h) {
        rate = Math.min(rate, k)
      }

      k += 1
    }

    return rate
  }

  minEatingSpeed_optimized(piles, h) {
    let leftPointer = 1
    let rightPointer = Math.max(...piles)
    let minimumRate = Math.max(...piles)

    while(leftPointer <= rightPointer) {
      let mid = Math.floor((leftPointer + rightPointer) / 2)
      let totalEatingHours = 0
      for(let i = 0; i < piles.length; i += 1) {
        totalEatingHours += Math.ceil(piles[i] / mid)
      }
      if(totalEatingHours <= h) {
        minimumRate = Math.min(minimumRate, mid)
        rightPointer = mid - 1
      } else {
        leftPointer = mid + 1
      }
    }
    return minimumRate
  }
}

function main() {
  let test = [25,10,23,4]
  let hour = 4
  let sol = new Solution()
  let ans = sol.minEatingSpeed(test, hour)
  console.log(ans)
}

main()