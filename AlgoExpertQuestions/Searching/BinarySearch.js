class Search {
  binarySearch(space, target, left, right) {
    /*base case*/
    if(space.length === 1) {
      return space[0] === target ? 0 : -1
    }

    const mid = Math.floor((left + right) / 2)

    if(target === space[mid]) return mid

    if(target > space[mid]) {
      return this.binarySearch(space, target, mid + 1, space.length)
    } else if(target < space[mid]){
      return this.binarySearch(space, target, 0, mid - 1)
    }
  }

  bs(space, target, left, right) {
    if(space.length === 1) {
      if(target === space[0]) return 0

      return -1
    }

    let mid = Math.floor((left + right) / 2)

    if(space[mid] === target) return mid

    if(target > space[mid]) {
      return this.bs(space, target, mid + 1, space.length)
    } else if(target < space[mid]) {
      return this.bs(space, target, 0, mid - 1)
    }
  }
}

let searchSpace = [1,2,3,10,22,23,45,101,110]
let target = 45
const ss = new Search()
console.log(ss.binarySearch(searchSpace, target, 0, searchSpace.length - 1))