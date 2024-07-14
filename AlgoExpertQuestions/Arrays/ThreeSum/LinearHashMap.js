class HashMap {
  constructor() {
   this.map = [] //space complexity O(n)
  }
   
   hashCode(s) {
     return s.split("").reduce((a,b) => {
        a = ((a << 5) - a) + b.charCodeAt(0)
        return a & a
     }, 0)
   }
   
   put(key, value) { //O(n)
    let location = this.hashCode(key)
    
    if(this.map[location] === undefined) {
       this.map[location] = new LinkedList()
    }
    
    const kVPair = new KeyValuePair(key, value)
    this.map[location].append(kVPair)
   }
   
   get(key) { //O(1)
    let currentLocation = this.hashCode(key)
    let currentMappedElement = this.map[currentLocation]
    return currentMappedElement && currentMappedElement.getArrays() || []
   }
 }
 
 class KeyValuePair{
  constructor(key, value) {
    this.key = key
    this.value = value
  }
 }
 
 
 class LinkedList {
   constructor() {
     this.length = 0
     this.head = null
   }
   
   append(element) { //O(n)
     let current
     let node = new Node(element)
     
     if(!this.head) {
      this.head = node
     } else {
       current = this.head
       
       while(current.next) {
         current = current.next
       }
       
       current.next = node
       this.length++
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
   
   print() {
     let current
     let string = ""
     if(!this.head) {
      return false
     } else {
     current = this.head
      while(current) {
        string = current.element
        current = current.next
      }
     }
     
     return string
   }
 }
 
 class Node {
   constructor(element) {
     this.element = element
     this.next = null
   }
 }
 
 
 
 
 function threeNumberSum(array, targetSum) {
   // Write your code here.
   
   let hashMap = new HashMap()
   let pointerExtra = null
   let thirdEye = null
 
   const sum = (a, b, c) => { // O(1)
     return a + b + c
   }
 
   //why did we sort?
   const sort = (arr) => { //O(n)^2
     let minIndex,
       currMin,
       temp
     
     for(let index = 0; index < arr.length; index++) {
       currMin = arr[index]
       minIndex = index
       for(let jIndex = index + 1; jIndex < arr.length ; jIndex++) {
         if(arr[jIndex] < currMin) {
           minIndex = jIndex
           currMin = arr[jIndex]
         }
       }
       
       if(minIndex != index) {
         temp = arr[index]
        arr[index] = arr[minIndex]
        arr[minIndex] = temp
       } 
     }
 
     return arr
   }
    
   array = sort(array)
   //sorting here  
       
   let pointerJ = 0
   let pointerK = 0
   for(let indx = 0; indx < array.length; indx++) { //O(n^2)
     pointerJ = indx + 1
     pointerK = pointerJ + 1
     while(pointerK < array.length && pointerJ < array.length) {
       let tripSum = sum(array[indx], array[pointerJ], array[pointerK])
        console.log(`[${array[indx]},${array[pointerJ]},${array[pointerK]}]`)
        hashMap.put(tripSum.toString(), [array[indx], array[pointerJ], array[pointerK]])
       pointerK++
       if(pointerK === array.length) {
         pointerJ += 1
         pointerK = pointerJ + 1
       }
     }
   }
 
   
   const answer = hashMap.get(targetSum.toString())
   return answer
  }

  let arr = [12, 3, 1, 2, -6, 5, -8, 6]
  let target = 0
  const ans = threeNumberSum(arr, target)
  console.log(ans)

  /**
   * 12,3,1 12,
   */