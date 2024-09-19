const directions = [
  {dr: 1, dc: 0},
  {dr: -1, dc: 0},
  {dr: 0, dc: 1},
  {dr: 0, dc: -1},
]

type Island = {
  length: number
}

export function riverSizes(matrix: number[][]) {
  // Write your code here.
  let rows = matrix.length
  let cols = matrix[0].length

  const dfs = (r: number, c: number, island: Island): void => {
    if(r < 0 || c < 0 || r >= rows || c >= cols || matrix[r][c] !== 1) {
      return
    }

    matrix[r][c] = 2
    island.length += 1

    for(let dir of directions) {
      dfs(r + dir.dr, c + dir.dc, island)
    }
  }

  let count: number[] = []

  for(let r = 0; r < matrix.length; r++) {
    for(let c = 0; c < matrix[0].length; c++) {
      if(matrix[r][c] === 1) {
        let island = { length: 0 }
        dfs(r, c, island)
        count.push(island.length)
      }
    }
  }
  
  
  return count
}
