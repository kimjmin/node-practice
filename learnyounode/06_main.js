var mymodule = require('./06_mymodule');

var dir = process.argv[2]
var filterStr = process.argv[3]

mymodule(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err);

  //forEach : 배열의 각 요소에 대해 지정된 작업을 수행합니다.
  list.forEach(function (file) {
    console.log(file);
  });

});
