function largestNumber(nums: number[]): string {
  if(nums.length === 1) return `${nums[0]}`


  const sort = (x, y) => {
    let combiOne = `${x}${y}`
    let combiTwo = `${y}${x}`
    
    if(combiOne > combiTwo) {
      return -1
    } else if(combiTwo > combiOne) {
      return 1
    }

    return 0
  }

  nums = nums.sort(sort)
  
  if (nums[0] === 0) return "0";
  
  return nums.join("")
};