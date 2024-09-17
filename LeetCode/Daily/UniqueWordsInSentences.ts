function uncommonFromSentences(s1: string, s2: string): string[] {
  let map = new Map<string, number | any>();
  let stringArr: string[] = s1.split(" ")
  let stringArr2: string[] = s2.split(" ")

  //update map for stringArr
  for(let i = 0; i < stringArr.length; i += 1) {
    if(!map.get(stringArr[i])) {
      map.set(stringArr[i], 1)
    } else {
      map.set(stringArr[i], map.get(stringArr[i]) + 1)
    }
  }

  //update map for stringArr2
  for(let i = 0; i < stringArr2.length; i += 1) {
    if(!map.get(stringArr2[i])) {
      map.set(stringArr2[i], 1)
    } else {
      map.set(stringArr2[i], map.get(stringArr2[i]) + 1)
    }
  }

  //now we only push the items to resultant array
  //that has count 1
  let result: string[] = []

  for(let key of map.keys()) {
    if(map.get(key) === 1) {
      result.push(key)
    }
  }

  return result
};