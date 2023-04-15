//create a adjacency list

class Map {
  constructor() {
    this.map = {}
    this.visited = []
  }

  has(key) {
    return this.map.hasOwnProperty(key)
  }

  put(key, value = null) {
    if(!this.has(key)) {
      this.map[key] = []
      if(value) {
        this.map[key].push(value)
      }
    } else {
      this.map[key] = [...this.map[key], value]
    }

    return true
  }

  print() {
    return this.map
  }

  dfs(at) {
    if(this.visited[at]) return
    this.visited[at] = true

    let neighbours = this.map[at]
    for(let index = 0; index < neighbours.length; index += 1) {
      
    }

  }
}


let adjacentMap = new Map()
adjacentMap.put("0", "9")
adjacentMap.put("9", "8")
console.log(adjacentMap.print())