function getLowestCommonManager(topManager, reportOne, reportTwo) {
  let lcm = null

 function compute(node, target) {
   if(node.name === target.name) {
     return true
   }

   if(node.directReports.length) {
     for(let index = 0; index < node.directReports.length; index ++) {
       let flag = compute(node.directReports[index], target)
       if(flag) return true
     }
   }

   return false
 }

 function traversal(currentNode, reporteeOne, reporteeTwo) {
   let dr1 = compute(currentNode, reporteeOne)
   let dr2 = compute(currentNode, reporteeTwo)

   if(dr1 && dr2) {
     console.log(currentNode)
     lcm = currentNode
   }
 }

 traversal(topManager, reportOne, reportTwo)

 return lcm
}