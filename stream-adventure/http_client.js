/**
request 패키지 따로 설치해야 함.

*/

var request = require('request');
var r = request.post('http://localhost:8000');
process.stdin.pipe(r).pipe(process.stdout);
