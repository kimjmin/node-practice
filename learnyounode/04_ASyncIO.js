var fs = require('fs');
var filePath = process.argv[2];

var fBuffer = fs.readFile(filePath, function (err, data) {
  if (err) throw err;
  var str = data.toString();
  var splits = str.split('\n');
  console.log(splits.length-1);
});

/**
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})
*/
