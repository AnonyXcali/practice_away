

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
 function throttle(func, wait, option = {leading: true, trailing: true}) {
  // your code here

  let lastContext = null
  let lastArgs = null
  let timer = null

  return (...args) => {
     if(timer) {
        lastContext = this
        lastArgs = args
        return
     }

    if(option.leading) {
      func(...args)
      return
    } else {
      lastContext = this
      lastArgs = args
    }
    
   let timeUp = () => setTimeout(() => {
      if(option.trailing && lastArgs) {
        func(...lastArgs)
        lastContext = null
        lastArgs = null
        timer = setTimeout(timeUp, wait)
      } else {
        timer = null
      }
    }, wait)

    timer = setTimeout(timeUp, wait) //why?

  }
}

