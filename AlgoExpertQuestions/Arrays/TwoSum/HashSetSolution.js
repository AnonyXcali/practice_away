/**
 * Solves in O(n) time
 * Space Complexity - O(n)
 */

class HashTable  {
  constructor() {
    this.table = {}
  }

  has(element) {
    return this.table.hasOwnProperty(element)
  }

  put(element) {
    if(!this.has(element)) {
      this.table[element] = true
    }
  }

  print() {
    return JSON.stringify(this.table)
  }
}

function twoNumberSum(array, targetSum) {
  let table = new HashTable()
  for(let index in array) {
    let calc = targetSum - array[index]
    console.log(calc)
    if(table.has(calc)) {
      return [array[index], calc]
    } else {
      console.log(array[index])
      table.put(array[index])
    }
  }


  return []
}

const arr = [-8, -6, 1, 2, 3, 5, 6, 12]
const target = 8
let ans = twoNumberSum(arr, target)
console.log(ans)


