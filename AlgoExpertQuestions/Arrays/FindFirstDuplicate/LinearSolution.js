class Set {
  constructor() {
    this.set = {}
  }

  exists(key) {
    return this.set.hasOwnProperty(key)
  }

  add(key) {
    if(this.exists(key)) {
      this.set[key] = true
    } else {
      this.set[key] = false
    }
  }

  get(key) {
    return this.set[key]
  }

  print() {
    return this.set
  }
 }


function firstDuplicateValue(array) {
 let set = new Set()
 let minIndex = -1
 for(let index = 0; index < array.length; index++){
   set.add(array[index])
   if(set.get(array[index]) && index < minIndex && minIndex !== -1) {
    minIndex = index
   } else if(set.get(array[index]) && minIndex === -1) {
     minIndex = index
   }
 }

 return array[minIndex]
}


const arr = [15, 2, 6, 3, 3, 22, 14, 16, 6, 21, 4, 16, 2, 17, 9, 13, 1, 3, 5, 6, 1, 2, 23, 16, 16]
firstDuplicateValue(arr)