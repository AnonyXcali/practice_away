class HashMap {
  constructor() {
    this.map = {}
  }

  has(key) {
    return this.map.hasOwnProperty(key)
  }

  set(key) {
    if(!this.has(key)) {
      this.map[key] = false
    } else  {
      this.map[key] = true
    }
  }

  reset() {
    Object.keys(this.map).forEach(amenity => {
      this.map[amenity] = false
    })
  }

  get(key) {
    return this.map[key]
  }

  isEverythingAvailable () {
    return Object.keys(this.map).every(amenity => this.map[amenity])
  }
}


function apartmentHunting(blocks, reqs) {
  // Write your code here.

  let tail = 0
  let head = 0
  let mapped = new HashMap()
  let closestIndex = -1

  //initializing the map with falsy values
  for(let index = 0; index < reqs.length; index += 1) {
    mapped.set(reqs[index])
  }

  for(let index = 0; index < blocks.length; index += 1) {
    tail = index - 1
    head = index + 1
    if(blocks[tail] !== undefined) {
      //check if the tail block has either of the amenities
      for(let jIndex = 0; jIndex < reqs.length; jIndex += 1) {
        if(blocks[tail][reqs[jIndex]]) {
          mapped.set(reqs[jIndex])
        }
      }
    }

    //check if the current block has either of the amenities
    for(let jIndex = 0; jIndex < reqs.length; jIndex += 1) {
      if(blocks[index][reqs[jIndex]]) {
        mapped.set(reqs[jIndex])
      }
    }

    if(blocks[head] !== undefined) {
    //check if the next block has either of the amenities
    for(let jIndex = 0; jIndex < reqs.length; jIndex += 1) {
      if(blocks[head][reqs[jIndex]]) {
        mapped.set(reqs[jIndex])
      }
     }
   }

   //check if all the values in mapped are true
   if(mapped.isEverythingAvailable()) {
     closestIndex = index
     break
   } else {
     mapped.reset()
     tail += 1
     head += 1
   }
  }

  return closestIndex
}


let street = [
  {
    "gym": false,
    "office": true,
    "school": true,
    "store": false
  },
  {
    "gym": true,
    "office": false,
    "school": false,
    "store": false
  },
  {
    "gym": true,
    "office": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "school": true,
    "store": false
  },
  {
    "gym": false,
    "office": false,
    "school": true,
    "store": true
  }
]

const req = ["gym", "office", "school", "store"]

const ans = apartmentHunting(street, req)
console.log(ans)

/**
 * 
 * {
  "blocks": [
    {
      "gym": false,
      "office": true,
      "school": true,
      "store": false
    },
    {
      "gym": true,
      "office": false,
      "school": false,
      "store": false
    },
    {
      "gym": true,
      "office": false,
      "school": true,
      "store": false
    },
    {
      "gym": false,
      "office": false,
      "school": true,
      "store": false
    },
    {
      "gym": false,
      "office": false,
      "school": true,
      "store": true
    }
  ],
  "reqs": ["gym", "office", "school", "store"]
}
 */