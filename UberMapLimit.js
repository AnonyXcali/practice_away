//question = https://leetcode.com/discuss/interview-experience/2074287/Uber-FrontEnd-Phone-Screen


function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;
 
  setTimeout(() => {
    callback("User" + id)
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
   let results = []
   //wrap the inputs into promises
   let pointer = 0

   async function tasker() {
    let queue = []
    while(pointer < inputs.length) {
      //slice the array into limited queues
      let reducedArray = inputs.slice(pointer, pointer + limit)
      //iterate over the array and create promises
      console.log(reducedArray)
      for(let index = 0; index < reducedArray.length; index++) {
       let promise = new Promise((resolve, reject) => {
          iterateeFn(reducedArray[index], resolve)
       })
       queue.push(promise)
     }
     //wait for individual all the promises to get resolved
     results.push(...await Promise.all(queue))
     queue = []
     pointer += limit
    }
   }
   

   tasker().then(() => callback(results))
   

   //promiseFactory(queue, limit)
  //  Promise.all(queue).then((data) => {
  //   callback(data)
  // })
}

const printAll = (data) => {
  console.log(data)
}

const promiseFactory = (promises, limit) => {
  let result = []
  let maxLimit = limit
  return new Promise((resolve, reject) => {
    promises.forEach(async (p) => {
      const data = await p
      result.push(data)
      if(result.length === promises.length) {
        resolve(result)
      }
    })
  })
}

mapLimit([1,2,3,4,5], 2, getNameById, printAll)

