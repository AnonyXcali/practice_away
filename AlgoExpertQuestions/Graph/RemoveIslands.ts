export function removeIslands(matrix: number[][]) {
  // Write your code here.
  let rows = matrix.length
  let cols = matrix[0].length

  const directions = [
    {dr: -1, dc: 0},
    {dr: 1, dc: 0},
    {dr: 0, dc: 1},
    {dr: 0, dc: -1},
  ]

  const dfs = (r: number, c: number): void => {
    if(r < 0 || c < 0 || r >= rows || c >= cols || matrix[r][c] !== 1) {
      return;
    }

    matrix[r][c] = 2

    for(let dir of directions) {
      dfs(r + dir.dr, c + dir.dc)
    }
  }

  for(let c = 0; c < cols; c++) {
    if(matrix[0][c] === 1) dfs(0, c)
    if(matrix[rows - 1][c] === 1) dfs(rows - 1, c)
  }

  for(let r = 0; r < rows; r++) {
    if(matrix[r][0] === 1) dfs(r, 0)
    if(matrix[r][cols - 1] === 1) dfs(r, cols - 1)
  }

  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(matrix[r][c] === 1) {
        matrix[r][c] = 0
      } else if(matrix[r][c] === 2) {
        matrix[r][c] = 1
      }
    }
  }
  
  return matrix;
}
