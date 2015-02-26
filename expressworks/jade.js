var express = require('express')
var app = express()
app.set('view engine', 'jade')
app.set('views', process.argv[3])
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])

/*
templates 폴더 아래에 있는 jade 파일.
jade 모듈 사용. : npm install jade
index.jade 파일 내용 : 
h1 Hello World
p Today is #{date}.

var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(process.argv[3]||__dirname,'templates'));
app.set('view engine', 'jade');

app.get('/home',function(req, res){
  res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
*/
