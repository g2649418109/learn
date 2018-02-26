var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var connectsql = require('./connectsql')


app.get('/showData', function(req, res) {
	res.writeHead(200,{"Content-Type":"application/json; charset=utf8"});
	// 操作数据库
    var sql = 'SELECT * FROM websites' //查询数据表websites
    //查
   connectsql.query(sql, "utf8", function (err, result) {
	    if (err) {
		    console.log('[SELECT ERROR] - ', err.message)
		    return
	    }
	    console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n');
      var results = {
      	'code':200,
      	'data': result,
      	'msg': '成功'
      }
      res.end(JSON.stringify(results),'utf8')
    })
})

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