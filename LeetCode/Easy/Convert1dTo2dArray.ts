function construct2DArray(original: number[], m: number, n: number): number[][] {
  if(original.length !== m * n) return []
  
  let start: number = 0
  let row = 1
  let end: number = (row * n) - 1
  let result: number[][] = []


  while(row <= m) {
    let innerArr: number[] = []
    for(let i = start; i <= end; i += 1) {
      innerArr.push(original[i])
    }
    start += n
    row += 1
    end = (row * n) - 1
    result.push(innerArr)
  }

  return result
};