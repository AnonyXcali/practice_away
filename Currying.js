// const sum = (a) => (b) => typeof b !== undefined ? sum(a + b) : a


function sum(a) {
  return function(b) {
    if(typeof b !== "undefined" && b !== "undefined") {
      return sum(a + b)
    } else {
      console.log(a)
      return a
    }
  }
}

const final = sum(1)(2)(3)()(4)()
console.log(final)
