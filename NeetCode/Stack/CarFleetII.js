/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function(cars) {
  //[[1,2],[2,1],[4,3],[7,2]]
  let stack = []
  let result = new Array(cars.length).fill(-1)

  for(let i = cars.length - 1; i >= 0; i -= 1) {
    //this is for handling later cases
    while(stack.length > 0 && result[stack[stack.length - 1]] >= 0) {
      let nextCar = stack[stack.length -1]
      let timeToCatchNextCar = calculate(cars[i], cars[nextCar])
      let timeToCatchFutureCar = result[nextCar]
      if(timeToCatchNextCar > 0 && timeToCatchNextCar <= timeToCatchFutureCar) {
        break
      }

      stack.pop()
    }

    //this is for handling and checking the current car will get absorbed or not
    if(stack.length > 0) {
      let nextCar = stack[stack.length -1]
      result[i] = calculate(cars[i], cars[nextCar])
    }

    stack.push(i)
  }

  return result
 
};

const calculate = (leftCar, rightCar) => {
  let [leftCarPos, leftCarSpeed] = leftCar
  let [rightCarPos, rightCarSpeed] = rightCar

  let posDiff = rightCarPos - leftCarPos
  let spdDiff = leftCarSpeed - rightCarSpeed
  
  if(spdDiff <= 0) return -1
  let time = posDiff / spdDiff
  return time
}

function main() {
  let test = [[1,2],[2,1],[4,3],[7,2]]
  let ans = getCollisionTimes(test)
  console.log(ans)
}

main()