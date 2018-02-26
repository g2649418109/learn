var fs = require('fs')
//文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()

//异步读取
fs.readFile('input.txt', function (err,data) {
	/* body... */
	if (err) {
		return console.log(err)
	}
	console.log('异步读取:' + data.toString())
})
/*
//同步读取
var data = fs.readFileSync('input.txt')
console.log('同步读取:' + data.toString())
*/
console.log('程序执行完毕')



//打开文件
// 语法
// 以下为在异步模式下打开文件的语法格式：
// fs.open(path, flags[, mode], callback)

//异步打开文件
console.log('准备打开文件')
fs.open('input.txt','r+',function (err,fd) {
	/* body... */
	if (err) {
		return console.log(err)
	}
	console.log('打开文件成功！！')
})
//获取文件信息
// 语法
// 以下为通过异步模式获取文件信息的语法格式：
// fs.stat(path, callback)
fs.stat('input.txt',function (err, stats) {
	/* body... */
	if (err) {
		return console.error(err)
	}
	console.log(stats)
	console.log("读取文件信息成功！")

	// 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile())
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory())
})

//写入文件
// 语法
// 以下为异步模式下写入文件的语法格式：
// fs.writeFile(file, data[, options], callback)
console.log('准备写入文件')
fs.writeFile('input.txt', '这是通过写入的文件内容', function (err) {
	/* body... */
	if (err) {
		console.log(err)
	}
	console.log('写入文件成功')
	console.log('-----------我是分割线------------')
	console.log('读取写入的数据')
	fs.readFile('input.txt', function (err, data) {
		/* body... */
		if (err) {
			return console.log(err)
		}
		console.log('异步读取文件数据： ' + data.toString())
	})
})


//读取文件
// 语法
// 以下为异步模式下读取文件的语法格式：
// fs.read(fd, buffer, offset, length, position, callback)
