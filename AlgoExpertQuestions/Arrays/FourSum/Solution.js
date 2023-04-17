class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(data) {
    let node = new Node(data)

    if(!this.head) {
      this.head = node
    } else {
      let current = this.head

      while(current.next){
        current = current.next
      }

      current.next = node
      this.length += 1
    }
  }

  getArrays() { //O(n)
    let current
    let answerArray = []
    if(!this.head) {
     return answerArray
    } else {
    current = this.head
     while(current) {
       answerArray.push(current.element.value)
       current = current.next
     }
    }
    
    return answerArray
  }
}

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class KeyValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

class HashTable {
  constructor() {
    this.table = []
  }

  hashCode(s) {
    return s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0) 
  }


  // hashCode(string){
  //   return string.split("").reduce((a, b) => {
  //      a = ((a << b) - a) + b.charCodeAt(0)
  //      return a & a
  //   }, 0)
  // }

  get(key) { //O(1)
    let currentLocation = this.hashCode(key)
    let currentMappedElement = this.table[currentLocation]
    return currentMappedElement && currentMappedElement.getArrays() || []
   }

  put(key, value) {
    const location = this.hashCode(key)

    if(this.table[location] === undefined) {
      this.table[location] = new LinkedList()
    }

    let keyValuePair = new KeyValuePair(key, value)
    this.table[location].append(keyValuePair)
  }
}

function mergeSort(array) {
  if(array.length < 2) return array

  let mid = Math.floor(array.length / 2)
  let leftArray = array.slice(0, mid)
  let rightArray = array.slice(mid, array.length)
  
  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray){
  let leftPointer = 0
  let rightPointer = 0
  let result = []

  while(leftPointer < leftArray.length && rightPointer < rightArray[rightPointer]){
   if(leftArray[leftPointer] < rightArray[rightPointer]){
      result.push(leftArray[leftPointer])
      leftPointer += 1
   } else {
      result.push(rightArray[rightPointer])
      rightPointer += 1
   }
  }

  return result.concat(leftArray.slice(leftPointer).concat(rightArray.slice(rightPointer)))
}

function sum(a, b, c, d) { //O(1)
  return a + b + c + d
}

function fourNumberSum(array, targetSum) {
  // Write your code here.
  //initialize hashMap
  let table = new HashTable()

  //Sort the array
  //array = mergeSort(array)

  for(let index = 0; index < array.length; index++) { //o(n)
    for(let jIndex = index + 1; jIndex < array.length; jIndex++) { //o(n)
      for(let kIndex = jIndex + 1; kIndex < array.length; kIndex++) { //o(n)
        for(let pIndex = kIndex + 1; pIndex < array.length; pIndex++) { //o(n)
          let calc = sum(array[index], array[jIndex], array[kIndex], array[pIndex])
            table.put(calc.toString(), [array[index], array[jIndex], array[kIndex], array[pIndex]])
          }
        }
      }
    } // n * n * n * n (0n^4)

  const answer = table.get(targetSum.toString())
  return answer
}


let test = [1, 2, 3, 4, 5, 6, 7]
let target = 10
let ans = fourNumberSum(test, target)
console.log(ans.toString())


