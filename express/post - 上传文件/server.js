var express = require('express')
var app = express()
var fs = require('fs')
var bodyParser = require('body-parser')
var multer = require('multer')

//创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(multer({dest: './tmp/'}).array('image'))

app.get('/index.htm', function (req, res) {
	res.sendFile(__dirname + '/' + 'index.htm')
})

app.post('/file_upload', function (req, res) {

	console.log(req.files[0]) //上传的文件信息
	var des_file = __dirname + '/' + req.files[0].originalname
	fs.readFile(req.files[0].path, function (err, data) {
		fs.writeFile(des_file,data, function (err) {
			if (err) {
				console.log(err)
			} else {
				res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
				response = {
					message: 'file upload successfully',
					filename: req.files[0].originalname
				}
			}
			console.log(response)
			res.end(JSON.stringify(response))
		})
	})
})

var server = app.listen(8081,function () {
	/* body... */
	var host = server.address().address
	var port = server.address().port
	console.log('应用实例，访问地址为http://%s:%s', host,port)
})