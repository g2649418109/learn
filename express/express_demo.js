var express = require('express')
var app = express()

app.get('/', function (req, res) {
	/* body... */
	res.send('hello world')
})

var server = app.listen(8081, function () {
	/* body... */
	var host = server.address().address
	var port = server.address().port
	console.log('应用实例，访问地址为 http://%s:%s', host,port)
})