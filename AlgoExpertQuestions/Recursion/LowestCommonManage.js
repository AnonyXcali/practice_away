function getLowestCommonManager(topManager, reportOne, reportTwo) {
  
  /**
   * currentNode = fn(...directReports)(1, 0) + if they are themselves a dr(1 | 0)
   * if(currentNode === 2) return node
   */

  let lcm = null

  function compute(node, targetOne, targetTwo) {
    if(node.directReports.length) {
      let sum = 0
      for(let index = 0; index< node.directReports.length; index +=1 ) {
        let computed = compute(node.directReports[index], targetOne, targetTwo)
        if(typeof computed === "object") {
          return computed
        }
        sum += computed
      }

      if(node.name === targetOne.name || node.name === targetTwo.name) {
        sum += 1
      }

      if(sum === 2) {
        return node
      } else  {
        return sum
      }

    } else if(node.directReports.length <= 0) {
      if(node.name === targetOne.name || node.name === targetTwo.name) {
        return 1
      } else {
        return 0
      }
    }
  }

  for(let index = 0; index < topManager.directReports.length; index += 1) {
   lcm = compute(topManager.directReports[index], reportOne, reportTwo)
   if(lcm === "object") {
      return lcm
   }
  }

  if(typeof lcm === "object") {
    return lcm
  }

  return topManager
}

// This is an input class. Do not edit.
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}
