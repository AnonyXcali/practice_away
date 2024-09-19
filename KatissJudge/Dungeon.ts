type Position = {
  level: number
  row: number
  col: number
  time: number
}

function bfs(dungeon: string[][][], start: Position, end: Position, L: number, R: number, C: number) {
  const directions = [
    {dl: 1, dr: 0, dc: 0}, //level above
    {dl: -1, dr: 0, dc: 0}, //level down
    {dl: 0, dr: 1, dc: 0}, // South
    {dl: 0, dr: -1, dc: 0}, // North
    {dl: 0, dr: 0, dc: -1}, //West
    {dl: 0, dr: 0, dc: 1}, //East
  ]

  const queue = [start]
  const visited: boolean[][][] = Array.from({ length: L}, 
    () => Array.from({ length: R }, () => Array(C).fill(false)))

  visited[start.level][start.row][start.col] = true

  while(queue.length) {
    let { level, row, col, time } = queue.shift()!
    if(level === end.level && row === end.row && col === end.col) {
      return time
    }

    for(let dir of directions) {
      const newLevel = level + dir.dl
      const newRow = row + dir.dr
      const newCol = col + dir.dc

      const access = (newLevel >= 0 && newLevel < L)
      && (newRow >= 0 && newRow < R)
      && (newCol >= 0 && newCol < C)
      && (dungeon[newLevel][newRow][newCol] !== "#")
      && (!visited[newLevel][newRow][newCol])

      if(access) {
        visited[newLevel][newRow][newCol] = true
        queue.push({
          level: newLevel,
          row: newRow,
          col: newCol,
          time: time + 1,
        })
      }
    }
  }
  return -1
}


function solveDungeonEscape(input: string): void {
  //first parse the lines
  //create array of lines
  const lines = input.split("\n").map(line => line.trim())
  
  let index = 0
  
  while(true) {
    const [L, R, C] = lines[index].split(" ").map(Number)
    index += 1

    if(L === 0 && R === 0 && C === 0) break

    //lets create the dungeon
    let dungeon: string[][][] = Array.from({ length: L }, () =>
      Array.from({ length: R }, () => [])
  );

    let start: Position | null = null
    let end: Position | null = null

    for(let l = 0; l < L; l++) {
      for(let r = 0; r < R; r++) {
        const line = lines[index++]
        dungeon[l][r] = line.split("")

        for(let c = 0; c < C; c++) {
          if(dungeon[l][r][c] === "S") {
            start = { level: l, row: r, col: c, time: 0}
          } else if(dungeon[l][r][c] === "E") {
            end = { level: l, row: r, col: c, time: 0}
          }
        }
      }
      index++
    }

    if(start && end) {
      const result = bfs(dungeon, start, end, L, R, C)
      if(result === -1) {
        console.log("Trapped")
      } else {
        console.log(`Escaped in ${result} minutes`)
      }
    }
  }
}

// Example Input
const input = `
3 4 5
S....
.###.
.##..
###.#

#####
#####
##.##
##...

#####
#####
#.###
####E

1 3 3
S##
#E#
###

0 0 0
`;

solveDungeonEscape(input);