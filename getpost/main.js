var http = require('http')
var url = require('url')
var util = require('util')

http.createServer(function (req,res) {
	/* body... */
	res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'})
	var param = url.parse(req.url, true).query
	res.write('网站名：' + param.name)
	res.write("\n")
	res.write('地址：' + param.url)
	res.write("\n")
	res.end(util.inspect(url.parse(req.url, true)))
}).listen(3000)