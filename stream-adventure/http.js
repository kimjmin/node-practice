/**
http 역시 Stream 객체의 일종임.
아래와 같이 실행하면 메모리 사용 없이 바로 파일 내용을 response로 출력 가능.
data 객체 없이 사용.

var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    fs.createReadStream(process.argv[2]).pipe(res);
});
server.listen(5000);
/* */

/**
반대로 POST 로 데이터 읽어서 파일에 쓰는것도 가능.

var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(fs.createWriteStream(process.argv[2]));
    }
    res.end('beep boop\n');
});
server.listen(5000);
/* */

var http = require('http');
var through = require('through');

var server = http.createServer(function(req, res){
  if (req.method === 'POST') {
    req.pipe(through(function(buf){
      this.queue(buf.toString().toUpperCase());
    })).pipe(res);
  }
});

server.listen(process.argv[2]);
