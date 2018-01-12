/*var http = require('http');
var url = require('url');
var show = require('./show');


http.createServer(onRequest).listen(process.env.PORT || 5000);
console.log('Server has started');

/*function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello Noders');
  response.end();
}*/

/*function doGet() {
  return HtmlService.createHtmlOutputFromFile('/public/index.html');
}

function onRequest(request, response){
  var pathName = url.parse(request.url).pathname;
  console.log('pathname' + pathName);
  show.showPage(response, pathName)
}*/


var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 5000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static('public'));


var server = app.listen(port, function () {
  var host = server.address().address;
  

  console.log('Example app listening at http://%s:%s', host, port);
});

