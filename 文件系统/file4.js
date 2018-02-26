// 删除文件
// 语法
// 以下为删除文件的语法格式：
// fs.unlink(path, callback)

var fs = require('fs')

console.log('准备删除文件')
fs.unlink('chanchu.txt', function (err) {
	/* body... */
	if (err) {
		return console.log(err)
	}
	console.log('删除成功')
})