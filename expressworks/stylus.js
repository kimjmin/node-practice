

var path = require('path');
var express = require('express');
var stylus = require('stylus')
var app = express();

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

/**
href="/main.css" 여기에 main.styl 여기 있는 파일 매칭 시켜줌.
main.styl 내용 :
p
  color red

*/
/**
app.get('/',function(req, res){
  var html = '<html><head><title>expressworks</title><link rel="stylesheet" type="text/css" href="/main.css"/></head><body><p>I am red!</p></body></html>';
  res.end(html);
});
*/

app.listen(process.argv[2]);
