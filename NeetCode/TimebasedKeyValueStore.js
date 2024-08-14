class TimeMap {
  constructor() {
      this.keyStore = new Map();
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    let current = this.keyStore
    let temp = [value, timestamp]
    if(!current.get(key)) {
      current.set(key, [])
    }
    current.get(key).push(temp)

  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    let current = this.keyStore
    let values = current.get(key)
    if(values) {
      return this.binarySearch(values, timestamp)
    } else {
      return ""
    }
  }

  binarySearch(values, target) {
    let left = 0
    let right = values.length - 1
    let res = ""

    while(left <= right) {
      let mid = Math.floor((left + right) / 2)
      
      if(values[mid][1] <= target) {
        res = values[mid][0]
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return res
  }
}

function main() {
  let timeMap = new TimeMap()
  timeMap.set("alice", "happy", 1)
  timeMap.set("alice", "sad", 3)
  timeMap.set("alice", "crazy", 10)
  console.log(timeMap.get("alice", 4))
}

main()
