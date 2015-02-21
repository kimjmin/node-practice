var fs = require('fs');
var filePath = process.argv[2];
var filterExt = process.argv[3];
var path = require('path');

var fList = fs.readdir(filePath, function (err, list) {
  for(var i=0; i<list.length; i++){
    if(path.extname(list[i]) === '.'+filterExt){
      console.log(list[i]);
    }
  }
});

/**
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
});

*/
