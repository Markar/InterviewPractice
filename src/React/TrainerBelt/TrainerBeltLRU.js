export default class LRU {
  constructor(max = 10) {
    this.max = max;
    this.cache = new Map();
  }

  get(key) {
    let item = this.cache.get(key);
    if (item) {
      // refresh key
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  set(key, val) {
    if (this.cache.has(key)) {
      // delete key, will be refreshed on the set afterward
      this.cache.delete(key);
    } else if (this.cache.size == this.max) {
      // evict oldest
      this.cache.delete(this.first());
    }

    this.cache.set(key, val);
  }

  first() {
    return this.cache.keys().next().value;
  }
}
