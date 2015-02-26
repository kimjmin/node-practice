/**
through 모듈 사용.
npm install -g through

throug 의 callback 함수에는 this 객체 내장.
queue , end 적용.
흠.. 쓸일이 있을지는 잘 모르겠다. 흠.
queue 안에 처리할 내용 입력하면 되려나.
*/
var through = require('through');
process.stdin.pipe(through(function (buf) {
  this.queue(buf.toString().toUpperCase());
})).pipe(process.stdout);
