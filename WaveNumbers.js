function waveNumbers(array) {

  let pointerLeft, pointerRight
  let flag 

  for(let index = 0; index < array.length; index++) {
    pointerLeft = index - 1
    pointerRight = index + 1
    flag = index % 2 === 0
    let temp = undefined

    if(pointerLeft < 0) {
      if(pointerRight < array.length 
        && array[index] < array[pointerRight]) 
      {
         temp = array[index]
         array[index] = array[pointerRight]
         array[pointerRight] = temp
      } 
    } else {
      if(flag) {
       if(array[pointerLeft] > array[index]) {
        temp = array[index]
        array[index] = array[pointerLeft]
        array[pointerLeft] = temp
     }
     if(array[pointerRight] > array[index]) {
       temp = array[index]
       array[index] = array[pointerRight]
       array[pointerRight] = temp
     }
      } else {
        if(array[pointerLeft] < array[index]) {
          temp = array[index]
          array[index] = array[pointerLeft]
          array[pointerLeft] = temp
       }
       if(array[pointerRight] < array[index]) {
         temp = array[index]
         array[index] = array[pointerRight]
         array[pointerRight] = temp
       }
      }  
    }
  }

  return array
}

let arr = [4, 3, 2, 1]
let ans = waveNumbers(arr)
console.log(ans)