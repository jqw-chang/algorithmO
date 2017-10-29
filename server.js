const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


const testCase = require('./Controllers/TestCaseController.js');
const functionTester = require('./Controllers/FunctionTesterController.js');
const regression = require('./Controllers/RegressionController.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
  // res.sendFile('index.ejs');
});

app.post('/', testCase.checkBody);

app.listen(5000);