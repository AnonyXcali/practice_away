/**
 * MIN Heap - Descendants should be GREATER than their ascendant.
 */

function heapify(arr) {
  let pointer = arr.length - 1

  function swap (from, to) {
    let temp = arr[from]
    arr[from] = arr[to]
    arr[to] = temp
  }

  function checkLeft(index) {
    return arr[(2 * index) + 1] || null
  }

  function checkRight(index) {
    return arr[(2 * index) + 2] || null
  }

  function verifyAndProceed(index) {
    const leftChild = checkLeft(index)

    if(!leftChild) return null

    if(leftChild && leftChild > arr[index]) {
      swap(index, (2 * index) + 1)
    }
  }

  while(pointer > -1) {
    let leftChild = checkLeft(pointer)
    let rightChild = checkRight(pointer)

    if(leftChild || rightChild) {
      if(leftChild && rightChild) {
        const smallerChild = leftChild < rightChild ? ((2 * pointer) + 1) : ((2 * pointer) + 2)
        swap(pointer, smallerChild)
      } else {
        swap(pointer, (2 * pointer) + 1)
      }
    }

    const isRoot = pointer === 0

    if(isRoot) {
      verifyAndProceed((2 * pointer) + 1)
    }

    pointer -= 1
  }

  return arr
}

//const arr = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
const arr2 = [10, 20, 15, 12, 40, 25, 18]
console.log(heapify(arr2))