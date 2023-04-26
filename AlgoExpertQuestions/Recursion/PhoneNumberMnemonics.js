function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
  let numpad = {
    1: [1],
    2: ["a","b","c"],
    3: ["d","e","f"],
    4: ["g","h","i"],
    5: ["j","k","l"],
    6: ["m","n","o"],
    7: ["p","q","r","s"],
    8: ["t","u","v"],
    9: ["w","x","y", "z"],
    0: [0]
  }

  let result = []

  function compute(input, idx) {
    if(input.length === phoneNumber.length) {
      result.push(input)
      return
    }

    for(let index = idx; index < phoneNumber.length; index +=1) {
      for(let jIndex = 0; jIndex < numpad[phoneNumber[index]].length; jIndex += 1) {
        input += numpad[phoneNumber[index]][jIndex]
        compute(input, index + 1)
        input = input.substring(0, input.length - 1) 
      }
    }
    
  }

  compute("", 0)
    
  return result
}
