//读取文件
// 语法
// 以下为异步模式下读取文件的语法格式：
// fs.read(fd, buffer, offset, length, position, callback)

//关闭文件
// 语法
// 以下为异步模式下关闭文件的语法格式：
// fs.close(fd, callback)
var fs = require('fs')
var buf = new Buffer(1024)

console.log('准备打开已存在的文件')
fs.open('input1.txt','r+',function (err, fd) {
	/* body... */
	if (err) {
		return console.log(err)
	}
	console.log('文件打开成功！')
	console.log('准备读取文件：')
	fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
		/* body... */
		if (err) {
			return console.log(err)
		}

		//仅输出读取字节
		if (bytes > 0) {
			console.log(buf.slice(0, bytes).toString())
		}

		//关闭文件
		fs.close(fd, function (err) {
			/* body... */
			if (err) {
				console.log(err)
			}
			console.log('文件关闭成功')
		})
	})
})
