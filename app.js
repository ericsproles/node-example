var http = require('http')

var server = http.createServer(function (request, response) {
  response.end("Hello Universe!");
})

server.listen(3000)