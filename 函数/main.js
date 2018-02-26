var http = require('http')

http.createServer(function (request, response) {
	/* body... */
	response.writeHead(200, {'Content-Type':'text/plain'})
	response.write('hello world')
	response.end()
}).listen(8888)