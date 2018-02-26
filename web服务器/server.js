var http = require('http')
var fs = require('fs')
var url = require('url')

//创建服务器
http.createServer(function (request, response) {
	/* body... */
	//解析请求包括文件名
	var pathname = url.parse(request.url).pathname

	//输出请求文件名
	console.log('request for ' + pathname + ' received')

	//从文件系统中读取请求的文件内容
	fs.readFile(pathname.substring(1), function (err, data) {
		/* body... */
		if (err) {
			console.log(err)
			// HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {'Content-Type':'text/html'})
		} else {
			// HTTP 状态码: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {'Content-Type': 'text/html'})  

            //响应文件内容
            response.write(data.toString()) 
		}
		//发送响应数据
		response.end()
	})
}).listen(8081)
console.log('server running at http://127.0.0.1:8081')
