// function tester controller
// Will have an array of input sizes to test
// iterate through each input size >>>>>> send through callback
// As you send pass into callback, START TIMER -- once done, END TIMER
// Output an object with k/v pair of inputSize:TIME 
                               // >>>>>> send object to RegressionAnalysis
const fs = require('fs');

function functionTester(req, res, next) {
  //needed inputs = callback, inputArray

  // eval(req.body.callback)(inputArray)
  
  const obj = {};
  console.log(callback);
  inputArray.forEach((input) => {
    // let start = (new Date).getTime();
    // console.time('time');
    let start = performance.now();
    callback(input);
    // console.timeEnd('time');
    let time = performance.now() - start;
    obj[input] = time;
  });

  return obj;

  function add(num) { // O(1) constant
    return num + 500;
  }

  function loop(num) { // linear
    let doSomething = 0;
    for (let i = 1; i < num; i++) {
      doSomething++;
    }
  }

};

module.exports = functionTester;