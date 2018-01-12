
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static('public'));


var server = app.listen(port, function () {
  var host = server.address().address;
  

  console.log('Example app listening at http://%s:%s', host, port);
});

