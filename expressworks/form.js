/*
body-paerser 모듈 사용.
npm install body-parser
https://github.com/expressjs/body-parser
*/
/*
var express = require('express');
var app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.post('/form', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body.str.split('').reverse().join(''), null, 2));
});

app.listen(process.argv[2]);
*/

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
