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

const _throttle = (fn, delay) => {
  let lastTime = 0;
  console.log( 'called Throttle immediately');
  return (...args) => {
    const now = new Date().getTime();
    console.log("check = ", now, lastTime, now - lastTime, now - lastTime < delay)
    if (now - lastTime < delay) return;
    lastTime = now;
    fn(...args) ;
  }
}


const func = () => {
  console.log("click")
}


const thrittled = throttle(func, 2000)
thrittled()
thrittled()
thrittled()
thrittled()
thrittled()
thrittled()
thrittled()
thrittled()
thrittled()
thrittled()
thrittled()
thrittled()

