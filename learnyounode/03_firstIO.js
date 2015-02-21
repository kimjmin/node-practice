var fs = require('fs');
var filePath = process.argv[2];

var fBuffer = fs.readFileSync(filePath);
var str = fBuffer.toString();

var splits = str.split('\n');
console.log(splits.length-1);
