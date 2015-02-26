/**
표준 입력을 받아 ReadStream object 에 저장.
스트림에서 파이프를 통해 표준 출력으로 내보내기.
*/
var stdinObj = process.stdin;
stdinObj.pipe(process.stdout);
