// 截取文件
// 语法
// 以下为异步模式下截取文件的语法格式：
// fs.ftruncate(fd, len, callback)

var fs = require('fs')
var buf = new Buffer(1024)

console.log('准备打开文件')
fs.open('input2.txt','r+', function (err, fd) {
	/* body... */
	if (err) {
		return console.log(err)
	}

	console.log("文件打开成功！")
    console.log("截取10字节后的文件内容。")

    //截取文件
    fs.ftruncate(fd, 10, function (err) {
    	/* body... */
    	if (err) {
		return console.log(err)
	}
	console.log("文件截取成功。")
	console.log("读取相同的文件")
	fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
		/* body... */
		 if (err){
            console.log(err)
         }

         //仅输出读取到的字节
          if(bytes > 0){
            console.log(buf.slice(0, bytes).toString())
         }

         //关闭文件
         fs.close(fd, function (err) {
         	/* body... */
         	if (err){
               console.log(err)
            }
            console.log('文件关闭成功')
         })
	})
    })
})