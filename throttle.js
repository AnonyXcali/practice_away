let throttle = (fn, limit) => {
  let lastFunc
  let lastRan
  return function(...args) {
    const context = this
    if(!lastRan) {
      fn.apply(context, args)
      lastRan = Date.now() 
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(() => {
        fn.apply(context, args)
      }, limit - Date.now() - lastRan)
    }
  }
}

let throttled = (fn, limit) => {
  let lastRan = null
  let lastFunc = null

  return function(...args) {
    let context = this

    if(!lastRan) {
      fn.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(() => {
        fn.apply(context, args)
      }, limit - (Date.now() - lastRan))
    }
  }

}