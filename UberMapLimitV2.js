function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;
 
  setTimeout(() => {
    callback("User" + id)
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  // implement here
  let i = 0;
  let result = [];

  async function execute() {
    let output = [];
    while(i < inputs.length) {
      let slicedInput = inputs.slice(i, i+limit);
      console.log(slicedInput)
      for(let k = 0;k<slicedInput.length; k++) {
        const itemPromise = new Promise((resolve) => {
          iterateeFn(slicedInput[k], resolve);
        });
        output.push(itemPromise);
      }
      result.push(...(await Promise.all(output)));
      output = [];
      i += limit;
    }
  }
  execute().then(() => callback(result));
}

mapLimit([1,2,3,4,5], 2, getNameById, (allResults) => {
  console.log('output:', allResults) // ["User1", "User2", "User3", "User4", "User5"]
})