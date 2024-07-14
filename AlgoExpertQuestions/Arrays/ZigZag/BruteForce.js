class Set {
  constructor() {
    this.visited = {}
  }

  set(ele) {
    this.visited[ele] = true
  }

  get(ele) {
    return this.visited[ele]
  }

}

function zigzagTraverse(array) {  
  let pointerX = 0
  let pointerY = 0
  let result = []
  let visitedMap = new Set()
  let totalNumberOfElements = array.length * array[0].length

  while(result.length < totalNumberOfElements) {
   console.log("pushing", array[pointerX][pointerY])
   result.push(array[pointerX][pointerY])
   visitedMap.set(array[pointerX][pointerY])

   /*
    CONTROLLER

    If X is the topmost row 
     then move down
    Else 
     check if element exists in the left
    */

    if(pointerX === 0) { // topMost Row
      if(pointerY === 0) { // top Left element
        if(pointerX + 1 < array.length) {
          pointerX += 1
        } else {
          pointerY += 1
        }
      } else {
        if(visitedMap.get(array[pointerX][pointerY - 1])) { // if the previous element is visited  
          if(pointerY + 1 === array.length - 1) {
            pointerY -= 1
            pointerX += 1
          } else if(pointerY === array.length -1) {
            pointerX += 1
          } else {
            if(pointerY >= array[0].length - 1) {
              pointerX += 1
            } else {
              pointerY += 1
            }
          }
        }
      }
    } else if(pointerX === array.length -1) { //bottom row
      if(pointerY === 0) {
        pointerX -= 1
        pointerY += 1
      } else {
        if(array[pointerX][pointerY - 1] !== undefined
        && visitedMap.get(array[pointerX][pointerY - 1])) {
          if(pointerY + 1 === array[0].length - 1) {
            pointerX -= 1
            pointerY += 1
          } else {
            pointerY += 1
          }
        }
      }
    } else if(pointerX > 0 && pointerX < array.length){ //middle Rows
      if(pointerY === 0) {
        if(pointerX + 1 === array.length -1) {
          pointerX += 1
        } else {
          if(pointerY >= array[0].length) {
            pointerX += 1
          } else {
            console.log("??")
            pointerX -= 1
            pointerY += 1
          }
        }
      } else if(pointerY > 0) {
        if(array[pointerX][pointerY - 1] !== undefined 
          && visitedMap.get(array[pointerX][pointerY - 1])) { // if the previous element is visited 
          if(visitedMap.get(array[pointerX + 1][pointerY -1])) {          
            if(array[pointerX - 1][pointerY + 1] === undefined) {
              pointerX += 1
            } else {
              pointerX -= 1
              pointerY += 1
            }
          } else {
            pointerY -= 1
            pointerX += 1
          }
        }
      }
    }

    console.log("to be pushed next", array[pointerX][pointerY])
  }

  return result
}

let arr = [
  [1],
  [2],
  [3],
  [4]
]

const arr3 = [
  [1, 3],
  [2, 4],
  [5, 7],
  [6, 8],
  [9, 10]
]

const baseCase = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16], 
]

const ownCase = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16]
]
let arr2 = [[1, 2, 3, 4, 5]]

let ans = zigzagTraverse(arr2)
console.log(ans)