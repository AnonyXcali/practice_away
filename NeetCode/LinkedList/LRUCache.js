class CacheNode {
  constructor(val, cacheValue, next = null, prev = null) {
    this.val = val
    this.cacheValue = cacheValue
    this.next = null
    this.prev = null
  }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
      this.capacity = capacity
      this.cacheMap = new Map()
      this.nodeReferenceMap = new Map()
      this.recentUsed = null
      this.leastUsed = null
      this.head = null
      this.tail = null
      this.currentCapacity = 0
    }

    addCapacity() {
      this.currentCapacity += 1
    }

    removeCapacity() {
      this.currentCapacity -= 1
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
      //console.log(this.nodeReferenceMap)
      //from the cache map
      let value = this.cacheMap.get(key)
      if(!value || value === null) return -1
      let currNode = this.getNodeRef(key)
      //update recent used
      //console.log(currNode)
      this.updateRecentUsed(currNode, true)
      return value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
      //get the sequence value
      const nextSeq = this.getNextSeq()

      //create the node
      const node = new CacheNode(key, nextSeq)

      //console.log("cap", this.leastUsed, nextSeq, "key", key)

      //check size
      //if empty
      if(this.isEmpty()) {
        node.next = null
        node.prev = null

        /**
         * Update
         */
        this.head = node
        this.addCapacity()
        this.updateCacheMap(key, value)
        this.updateNodeReferenceMap(key, node)
        this.updateRecentUsed(node)
        this.updateLeastUsed(node)
      } else if(this.isFull()) {
        //we need to remove the least used node
        console.log("2", this.leastUsed, key)
        let leastUsedKey = this.leastUsed.val
        let leastUsedCacheNode = this.getNodeRef(leastUsedKey)
        let tempNext = leastUsedCacheNode.next
        let tempPrev = leastUsedCacheNode.prev

        
        leastUsedCacheNode.next = null
        leastUsedCacheNode.prev = null

        node.next = tempNext
        node.prev = tempPrev

        if(!tempNext) {
          this.tail = node
        } else if(!tempPrev) {
          this.head = node
        }

        this.updateCacheMap(key, value)
        this.updateNodeReferenceMap(key, node)

        this.updateCacheMap(leastUsedKey, null)
        this.updateNodeReferenceMap(leastUsedKey, null)
        
        //delete references from both maps
        this.deleteFromReferenceNode(leastUsedCacheNode)
        this.deleteFromCacheMap(leastUsedCacheNode)

        //update the least used
        this.updateLeastUsed(tempNext || tempPrev)

        //update the recent used
        this.updateRecentUsed(node)

      } else { /*When there is space*/
        //get node ref
        let currKey = this.recentUsed.val
        let lastUsed = this.getNodeRef(currKey)
        lastUsed.next = node
        node.prev = lastUsed
        this.addCapacity()
        this.updateCacheMap(key, value)
        this.updateNodeReferenceMap(key, node)
        this.updateRecentUsed(node)    
      }
    }

    deleteFromReferenceNode(node) {
      this.nodeReferenceMap.delete(node)
    }

    deleteFromCacheMap(node) {
      this.cacheMap.delete(node)
    }

    getNodeRef(key) {
      return this.nodeReferenceMap.get(key)
    }

    updateLeastUsed(node) {
      this.leastUsed = node
    }

    updateRecentUsed(node, increment = false) {
      if(increment) {

        let recentValue = this.recentUsed.val
        node.cacheValue = recentValue + 1
        this.recentUsed = node
        if(node === this.leastUsed) {
          if(node.next) {
            this.updateLeastUsed(node.next)
          } else if(!node.next) {
            this.updateLeastUsed(this.head)
          }
        }
      } else {
        this.recentUsed = node
      }
    }

    updateCacheMap(key, value) {
      this.cacheMap.set(key, value)
    }

    updateNodeReferenceMap(key, node) {
      this.nodeReferenceMap.set(key, node)
    }

    isEmpty() {
      return this.currentCapacity === 0
    }

    isFull() {
      return this.currentCapacity === this.capacity
    }

    getNextSeq() {
      if(!this.recentUsed) return 1
      return this.recentUsed.cacheValue + 1
    }
}
