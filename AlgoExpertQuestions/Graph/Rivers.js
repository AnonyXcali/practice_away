function riverSizes(matrix) {
  // Write your code here.
  let iPointer = 0
  let jPointer = 0
  let count = 0
  let localLength = 0
  let visitedMatrix = matrix.map(function(arr) {
      return arr.slice();
  })
  let riverLengths = []
  let height = matrix.length
  let width = matrix[0].length
  const totalEle = height * width

  count = 0
  iPointer = 0
  jPointer = 0

  while(count < totalEle) {
    dfs(iPointer, jPointer)
    if(localLength) {
      saveLength(localLength)
    }
    jPointer += 1
    if(jPointer >= matrix[0].length) {
      iPointer += 1
      jPointer = 0
    }
    count += 1
  }

  function saveLength(len) {
    riverLengths.push(len)
    localLength = 0
  }

  function checkSkip(i, j) {
    
    return i < 0 ||
    j < 0 ||
    i >= height ||
    j >= width ||
    visitedMatrix[i][j] === true || 
    matrix[i][j] === undefined ||
    matrix[i][j] === 0 || false
  }

  function neighbours(i, j) {
    //debugger
    console.log(i, j, checkSkip(i, j))
    if(checkSkip(i, j)) return
    dfs(i, j)
  }

  function dfs(i, j) {
    //debugger
    if(checkSkip(i, j)) return
    visitedMatrix[i][j] = true  
    neighbours(i - 1, j) //up
    neighbours(i + 1, j) //down
    neighbours(i, j - 1) //left
    neighbours(i, j + 1) //right
    localLength += 1
  }

  return riverLengths
}



const matrix = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
  [1, 0, 0],
  [0, 0, 0],
  [1, 0, 0],
  [1, 0, 1],
  [1, 1, 1]
]

const allLength = riverSizes(matrix)
console.log(allLength)