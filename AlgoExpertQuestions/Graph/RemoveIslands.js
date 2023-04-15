function removeIslands(matrix) {
  // Write your code here.
  const matrixHeight = matrix.length
  const matrixWidth = matrix[0].length
  const totalLength = matrixHeight * matrixWidth
  let count = 0
  let iPointer = 0
  let jPointer = 0
  let flag = false
  const replica = matrix.map(function(arr) {
      return arr.slice();
  })

  while(count < totalLength) {
    traverse(iPointer, jPointer)
    if(!flag) {
      matrix[iPointer][jPointer] = 0
    }

    flag = true
    jPointer += 1
    count += 1
    if(jPointer > matrixWidth) {
      iPointer += 1
      jPointer = 0
    }
  }
  
  
  function checkForInvalidIsland(i, j){
    console.log(i, j)
    const topOrBottomBoundary = i === 0 || i === matrixHeight - 1
    const leftOrRightBoundary = j === 0 || j === matrixWidth - 1

    if(topOrBottomBoundary || leftOrRightBoundary) {
      flag = true
    }
    return (i < 0 || i >= matrixHeight) ||
      (j < 0 || j >= matrixWidth) || 
      matrix[i][j] === 0 ||
      replica[i][j] === true
  }

  function neighbours(i, j) {
    if(checkForInvalidIsland(i, j)) return
    traverse(i, j)
  }

  function traverse(i, j) {
    if(checkForInvalidIsland(i, j)) return
    replica[i][j] = true
    neighbours(i-1, j) //up
    neighbours(i, j+1) //right
    neighbours(i+1, j) //down
    neighbours(i, j-1) //left
    
  }
    
  return matrix
}

const mat = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1]
]

console.log(removeIslands(mat))