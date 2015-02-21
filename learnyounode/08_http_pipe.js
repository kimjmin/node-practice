var http = require('http');
var bl = require('bl');
var arg2 = process.argv[2];

http.get(arg2, function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);

    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
