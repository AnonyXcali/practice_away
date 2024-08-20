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
    } else {
      id = setTimeout(() => {
        fn(...args)
      }, delay)
    }
  }
}

let func1 = debounce(() => { console.log("1")}, 2000)
let func2 = debounce(() => { console.log("2")}, 3000)
let func3 = debounce(() => { console.log("3")}, 4000)
let func4 = debounce(() => { console.log("4")}, 5000)
let func5 = debounce(() => { console.log("5")}, 6000)

func1()
func2()
func3()
func4()
func5()