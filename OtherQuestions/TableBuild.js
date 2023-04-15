function buildTable(rows, columns) {
  let table = []
  for(let index = 0; index < rows; index += 1) {
    table.push([])
  }
  
  let totalElements = rows * columns
  
  let pointHold = 0
  let value = 1
  
  let iIndex= 0
  let jIndex = 0
  
  while(pointHold < totalElements){
  	console.log(table)
   //push element at every index
   
    while(iIndex < rows) {
      table[iIndex][jIndex] = value
      value += 1
      pointHold += 1
      iIndex += 1
    }
    
    jIndex += 1
    iIndex -= 1
    
    while(iIndex > -1) {
      table[iIndex][jIndex] = value
      value += 1
      pointHold += 1
      iIndex -= 1
    }
    
    iIndex = 0
    jIndex += 1
    
  }
 
  
  
  return table
}


const table = buildTable(5, 4)
console.log(table