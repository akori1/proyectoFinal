

var express = require('express'), // si la ejecuto con los () me devuelve un server
  server = express(),
  bodyParser = require('body-parser');

server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true })); 

server.get("/index", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

server.get("/grilla", function (req, res) {
  res.sendFile(__dirname + "/public/html/grilla.html")
})

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

server.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

server.get("/public/html/editar.html", function (req, res) {
  res.sendFile(__dirname + "/public/html/editar.html")
})