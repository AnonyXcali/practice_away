function recursivePermutations(ref = [],result = [], temp) {
  if(ref.length === temp.length) {
    result.push([...temp])
    return
  }

  for(let i=0; i < ref.length; i+= 1) {
    //skip if character exists already
    if(temp.includes(ref[i])) continue

    temp.push(ref[i])
    recursivePermutations(ref, result, temp) //backtrack

    temp.pop()
  }

}

function solve() {
  let ref = ["a", "b", "c"]
  let result = []

  recursivePermutations(ref, result, [])

  return result
}

const ans = solve()
console.log(ans)