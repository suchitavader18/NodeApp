// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp!! \n");
});


server.listen(8000);
console.log("Server listening on port 8000 :  http://0.0.0.0:8000/");
