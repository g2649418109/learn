// 创建目录
// 语法
// 以下为创建目录的语法格式：
// fs.mkdir(path[, mode], callback)

var fs = require('fs')

console.log('创建目录 /tmp/test/')
fs.mkdir('./tmp/test3/', function (err) {
	/* body... */
	if (err) {
    	return console.error(err)
    }
    console.log('创建成功')
})


// 读取目录
// 语法
// 以下为读取目录的语法格式：
// fs.readdir(path, callback)