// 读取目录
// 语法
// 以下为读取目录的语法格式：
// fs.readdir(path, callback)

var fs = require('fs')

console.log('查看 /tmp 目录')
fs.readdir('./tmp/', function (err, files) {
	/* body... */
	if (err) {
       return console.error(err)
    }
    files.forEach( function(file) {
    	console.log(file)
    });
    console.log()
})

// 删除目录
// 语法
// 以下为删除目录的语法格式：
// fs.rmdir(path, callback)

// 执行前创建一个空的 /tmp/test3 目录
fs.rmdir('./tmp/test3', function (err) {
	/* body... */
	if(err) {
		return console.log(err)
	}
	console.log('读取tmp 目录')
	fs.readdir('./tmp', function (err, files) {
		/* body... */
		if(err) {
		return console.log(err)
	    }
	    files.forEach( function(file) {
	    	console.log(file)
	    });
	})
})