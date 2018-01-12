var content = require('./public/index.html');

function showPage(response, pathName){
  if(content.contentMap [pathName]){
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write(content[pathName]);
    response.end();
   }else {
  response.writeHead(404, {'Content-Type': 'text/html'})
  response.write('404 Page not found');
  response.end();
  }
}

exports.showPage = showPage;