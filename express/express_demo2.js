var express = require('express')
var app = express()

//主页输出‘hello world’
app.get('/', function (req, res) {
	/* body... */
	console.log('主页 get 请求')
	res.send('hello get')
})

// post请求
app.post('/', function (req, res) {
	/* body... */
	console.log('主页POST请求')
	res.send('hello 主页POST请求')
})

// /del_user 页面响应
app.get('/del_user', function (req, res) {
	/* body... */
	console.log('/del_user 响应 DELETE 请求')
	res.send('删除页面')
})

// /list_user 页面get请求
app.get('/list_user', function (req, res) {
	/* body... */
	console.log('/list_user GET 请求')
	res.send('用户列表页面')
})

//对页面 abcd, abxcd, ab123cd,等响应 GET 请求
app.get('/ab*cd', function (req, res) {
    console.log('/ab*cd GET 请求')
	res.send('正则匹配')
})


var server = app.listen(8081, function () {
	/* body... */
	var host = server.address().address
	var port = server.address().port
	console.log('应用实例，访问地址为 http://%s:%s', host,port)
})