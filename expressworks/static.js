/**
path : 내장 패키지. 경로 가져오는 패키지. 경로명 복잡한거 편하게 쓰는.
__dirname : 내장 변수 : 현재 경로.
static(process.argv[3]||path.join(__dirname, 'public'))) : 실행 매개변수 || 현재 실행 디렉토리의 public 디렉토리 이하 경로의 파일들.
*/
var path = require('path')
var express = require('express')
var app = express();

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2]);
