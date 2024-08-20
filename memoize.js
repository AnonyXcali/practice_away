function memoize (fn) {
  let cache = {}

  return function (...args) {
    if(cache[args]) {
      return cache[args]
    }

    const result = fn(...args)
    cache[args] = result
    return result
  }
}