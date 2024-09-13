class LRUCache<K, V> {
  capacity: number;
  LRU: CacheNode | null;
  MRU: CacheNode | null;
  map: Map<number, CacheNode>;
  length: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.length = 0;
    this.LRU = null;
    this.MRU = null;
    this.map = new Map<number,CacheNode>();
  }

  get(key: number): number {
    let node = this.map.get(key);
    if(!node) return -1;

    if(node === this.MRU) {
      /**Do nothing since its already Most Recent used */
      return node.value;
    }

    if(node === this.LRU) {
      /**
      - We need to update the LRU to MRU
      */
       
       //Since its LRU we know that its previous is null
       //The next element of current LRU is new LRU
       
       //capture the previous node references
       let tempNext = this.LRU.next;
       let tempMRU = this.MRU;

       //first move LRU to MRU
       this.LRU.next = null;
       this.MRU.next = this.LRU;
       this.LRU.prev = tempMRU;
       this.MRU = this.LRU;

      //update new LRU
      this.LRU = tempNext;
      this.LRU.prev = null;

      return node.value;
    }

    //middle case
    /**
    We know that a middle node which is neither LRU or MRU
    - Make it MRU
    - Capture its prev and next ref
    - Update LRU & MRU and their references accordingly.
     */

    let tempMRU = this.MRU;
    let tempLRU = this.LRU;
    let currPrevTemp = node.prev || null;
    let currNextTemp = node.next || null;

    currPrevTemp.next = currNextTemp;
    currNextTemp.prev = currPrevTemp;

    this.MRU.next = node;
    node.prev = this.MRU;
    node.next = null;
    this.MRU = node;

    return node.value;
  }

  middleCacheNodeUpdate(node: CacheNode, value: number): void {
    let currPrevTemp = node.prev || null;
    let currNextTemp = node.next || null;

    currPrevTemp.next = currNextTemp;
    currNextTemp.prev = currPrevTemp;

    this.MRU.next = node;
    node.value = value
    node.prev = this.MRU;
    node.next = null;
    this.MRU = node;
  }

  newCacheNodeCreation(key: number, value: number): void {
    let node = new CacheNode(key, value);
    //full capacity
    this.MRU.next = node;
    node.prev = this.MRU;
    this.MRU = node;
    this.map.set(this.MRU.key, node);

    //remove LRU
    this.map.delete(this.LRU.key);
    let nextCacheNode = this.LRU.next;
    this.LRU = nextCacheNode;
    this.LRU.prev = null;
  }


  put(key: number, value: number): void {
      let node = this.map.get(key);

      if(this.length < this.capacity) {
        if(node) {
          if(node === this.MRU) {
            this.MRU.value = value
            return
          }

          if(this.LRU === node) {
            this.LRU.value = value;
            let lruNext = this.LRU.next
            this.MRU.next = this.LRU;
            this.LRU.prev = this.MRU;
            this.MRU = this.LRU;
            this.LRU = lruNext
            this.map.set(this.MRU.key, node);
            return;
          }

          this.middleCacheNodeUpdate(node, value)
          return
        }

        node = new CacheNode(key, value)
        if(!this.MRU) {
          this.MRU = node;
          this.LRU = node;
          this.map.set(this.MRU.key, node);
          this.length += 1
          return;
        }

        this.MRU.next = node;
        node.prev = this.MRU;
        this.MRU = node;
        this.map.set(this.MRU.key, node);
        this.length += 1
        return
      }

      if(node) {
        if(this.MRU === node) {
          this.MRU.value = value
          return;
        }

        if(this.LRU === node) {
          this.LRU.value = value;
          let lruNext: CacheNode = this.LRU.next
          this.MRU.next = this.LRU;
          this.LRU.prev = this.MRU;
          this.MRU = this.LRU;
          this.LRU = lruNext
          this.map.set(this.MRU.key, node);
          return;
        }
        


        this.middleCacheNodeUpdate(node, value);
        return;
      }

      this.newCacheNodeCreation(key, value)
      return;
  }
}

class CacheNode {
  key: number;
  value: number;
  next: CacheNode | null;
  prev: CacheNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/