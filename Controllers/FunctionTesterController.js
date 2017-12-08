// function tester controller
// Will have an array of input sizes to test
// iterate through each input size >>>>>> send through callback
// As you send pass into callback, START TIMER -- once done, END TIMER
// Output an object with k/v pair of inputSize:TIME 
                               // >>>>>> send object to RegressionAnalysis
const { performance } = require('perf_hooks');


function functionTester(/*req, res, next*/ callback, inputArray) {
  //needed inputs = callback, testCase(arr)
  // Possible methods to use: 
  // - eval(strCallback)
  // - new Function(strCallback)
  
  const obj = {};
  console.log(callback);
  inputArray.forEach((input) => {
    let start = performance.now();
    callback(input);
    let time = performance.now() - start;
    console.log(time)
    // obj[input] = time;
  });

  return obj;
};


// // test:
// function add(num) { // O(1) constant
//   return num + 500;
// }

// function loop(num) { // linear
//   let doSomething = 0;
//   for (let i = 1; i < num; i++) {
//     doSomething++;
//   }
// }

// functionTester(loop, [1, 2, 3, 4, 5, 6]);

module.exports = functionTester;