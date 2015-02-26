/**
입력받은 파일을 ReadStream object 으로 보내고,
ReadStream object 에서 다시 표준 출력으로 파이프를 통해 내보냄.
*/
var fs = require('fs');
var arg1 = process.argv[2];
fs.createReadStream(arg1).pipe(process.stdout);
