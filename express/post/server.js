var express = require('express')
var app = express()
var bodyParser = require('body-parser')

//创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))

app.get('/index.htm', function (req, res) {
	res.sendFile(__dirname + '/' + 'index.htm')
})

app.post('/process_post', urlencodedParser, function (req, res) {
	//输出json格式
	var response = {
		'first_name': req.body.first_name,
		'last_name': req.body.last_name
	}
	console.log(response)
	res.end(JSON.stringify(response))
})

var server = app.listen(8081,function () {
	/* body... */
	var host = server.address().address
	var port = server.address().port
	console.log('应用实例，访问地址为http://%s:%s', host,port)
})