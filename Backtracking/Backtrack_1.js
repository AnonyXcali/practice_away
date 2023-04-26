// def is_valid_state(state):
//     # check if it is a valid solution
//This function takes in a state and returns
// a boolean.
function isValidState(state) {
  //check if it is a valid solution
  return state.length === n
}


//this function gets a list of candidates to
//construct our next state
function getCandidates(state, n) {
  if(state.length === 0) {
    return [...Array(n).keys()]
  }

  //find next position to set
  let position = state.length()
  let candidates = new Set([...Array(n).keys()])
  return []
}

//recursive function
function search(state, solutions, n) {
  if(isValidState(state)) {
    solutions.push(state.map(item => item))
    //return
  }

  let candidates = getCandidates(state)

  for(let index = 0; index < candidates.length; index += 1) {
    state.unshfit(candidates[index])
    search(state, solutions)
    state = state.filter(item => item === candidates[index])
  }
}

function solve(n) {
  let solutions = []
  let state = []
  search(state, solutions, n)
  return solutions
}