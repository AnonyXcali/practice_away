function staircaseTraversal(height, maxSteps){
  let count = 0
  let pS = []

  for(let index = 1; index <= maxSteps; index += 1) {
    pS.push(index)
  }

  console.log(pS)

  function compute(state, rH) {
    console.log(state, rH)
    if(state === height) {
      console.log("added", state, rH)
      count += 1
      return
    }

    for(let i = 0; i < pS.length; i += 1) {
      if(pS[i] <= rH) {
        state += pS[i]
        compute(state, rH - pS[i])
      } else {
        console.log("skipped", state, rH)
        continue
      }

      state = state - pS[i]
      rH += 1
    }
  }

  compute(0, height)

  return count
}

const possibleSteps = staircaseTraversal(4, 4)
console.log(possibleSteps)