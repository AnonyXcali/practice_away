function generateDivTags(numberOfTags) {
  // Write your code here.

  const result = []

  const compute = (str, oT, cT) => {
    if(cT === 0) {
      result.push(str)
    }

    if(oT > 0) {
      compute(str + "<div>", oT - 1, cT)
    }
    
    if(oT < cT) {
      compute(str + "</div>", oT, cT - 1)
    }
  }

  compute("", numberOfTags, numberOfTags)
  
  return result;
}

const generated = generateDivTags(3)
console.log(generated)
