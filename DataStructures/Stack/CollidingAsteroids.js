function collidingAsteroids(asteroids) {
  let stack = []

  for(let i = asteroids.length - 1; i >= 0; i -= 1) {
    const collision = stack.length && isColliding(asteroids[i], stack[stack.length - 1])
    let popped = null

    if(collision) {
      while(stack.length && Math.abs(asteroids[i]) >= Math.abs(stack[stack.length - 1])) {
        if(!isColliding(asteroids[i], stack[stack.length - 1])) break
        popped = stack.pop()
      }

      if(popped && Math.abs(popped) === Math.abs(asteroids[i]) 
      || isColliding(asteroids[i], stack[stack.length - 1]) 
      && Math.abs(stack[stack.length - 1]) >= Math.abs(asteroids[i])) {
        continue
      }
    }

    stack.push(asteroids[i])
  }

  return stack.reverse()
}

function isColliding(asteroidA, asteroidB) {
  return asteroidA > 0 && asteroidB < 0
}

let ans = collidingAsteroids([4, 7, -3, -5, 6, -10, 100, -50, 99])
console.log(ans)