let debounce = (fn, delay) => {
  /*fn spec*/
  /**
   * We want the function to happen after only when the previous timeout is done
   */
  let timeoutId = null

  return function(...args) {
    if(timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const debounce2 = (fn, delay) => {
  let id = null

  return function(...args) {
    if(id) {
      clearTimeout(id)
      fn(...args)
    } else {
      id = setTimeout(() => {
        fn(...args)
      }, delay)
    }
  }
}