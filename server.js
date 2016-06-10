

var express = require('express'), // si la ejecuto con los () me devuelve un server
  server = express();

server.use(express.static('public'));

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

