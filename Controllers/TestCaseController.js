// test case creator controller 
// InputType >>>>> 
// Creates 5 test cases >>>>> Outputs an array of inputs // sizes 
                                          // >>>> Send to functionTester

const Chance = require('chance');
const chance = new Chance();
const randomWord = require('random-word-by-length');

const testCase = {
  checkBody: (req, res, next) => {
    console.log(req.body);
    if (req.body.dataType === 'Number') {
      res.locals.testCase = testCase.numberType();
      console.log(res.locals.testCase);
    }

    if (req.body.dataType === 'String') {
      res.locals.testCase = testCase.stringType();
      console.log(res.locals.testCase);
    }

    if (req.body.dataType === 'Array') {
      res.locals.testCase = testCase.sameLengthArr();
      console.log(res.locals.testCase);
    }

    // if (req.body.dataType === 'diffLengthArr') {
    // }

    if (req.body.dataType === 'otherInput') {
      res.locals.testCase = req.body.other_dataType;
      console.log(res.locals.testCase);
    }
  },

  numberType: () => { 
    const testCases = [];
    let min = 5;
    let max = 200;
    let numOfNums = 5;
    for (let j = min; j <= max; j += ((max - min) / numOfNums)) {
      testCases.push(j);
    }
    return testCases;
  },

  stringType: () => { // won't be same strings everytime but same string lengths!!
    const array = testCase.numberType();
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      array[i] = randomWord(array[i]);
    }
    return array;
  },

  sameLengthArr: () => {
    const testCases = [];
    let iO = []; // in order
    let rO = []; // reverse order
    let zOa = []; // zipped order - type a
    let zOb = []; // zipped order - type b
    let halfO = []; // (1 to 5, 10 to 6)

    let mV = 10;
    for (let i = 1; i <= mV; i++) {
      iO.push(i);
      rO.push(mV - i);
      zOa.push((i % 2) ? i : (mV - i));
      zOb.push((i % 2) ? (mV - i) : i);
      if (i <= 5) {
        halfO.push(i);
      }
    }
    halfO.push(10, 9, 8, 7, 6);
    testCases.push(iO, rO, zOa, zOb, halfO)
    return testCases;
  },

  // diffLengthArr: () => {
  //   const testCases = [];
  // }

  // objectTestCase -- later feature
};


module.exports = testCase;
