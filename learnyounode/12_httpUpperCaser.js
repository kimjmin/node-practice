var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))

/*
var http = require('http');

var server = http.createServer(function (req, res) {
  if(req.method == 'POST'){

    req.on('data', function (data) {
      data = data.toString();
      data = data.toUpperCase();

      return res.end(data);
    });

  }
});

server.listen(Number(process.argv[2]));
*/
