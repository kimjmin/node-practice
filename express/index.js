var express = require('express');
var app = express();

/**
http://localhost:3000/user/kimjmin 이런 식으로 접속 했을 때
URI 에 있는 :id 를 req.params.id 에서 매개변수로 받을 수 있음.
app.get('/user/:id', function(req, res){
  res.send(req.params.id);
});
*/

/**
http://localhost:3000/user?id=kimjmin 이런 식으로 접속 했을 때
파라메터 id 를 req.query.id 에서 매개변수로 받을 수 있음.
app.get('/user', function(req, res){
  res.send(req.query.id);
});
*/

app.listen(3000);
