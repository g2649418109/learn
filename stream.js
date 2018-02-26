//node.js stream 流
//stream 有四种流类型：1. readable--可读操作 2. writable--可写操作 3. duplex--可读可写操作 4. transform--操作被写入的数据然后读出来
//所有的stream对象都是eventemitter 的实例，常用的事件有： 1. data--当数据可读时触发 2. end--没有更多的数据可读时触发 3. error--在接收和写入过程中发生错误时触发 4. finish--所有数据都被写入底层系统时触发
var fs = require('fs')

//从流中读取数据
var data = ''

//创建可读流
var readerStream = fs.createReadStream('input.txt')

//设置编码为 utf8
readerStream.setEncoding('UTF8')

//处理流事件--> data, end, and error
readerStream.on('data', function(chunk){
	data += chunk
})

readerStream.on('end',function(){
	console.log(data)
})

readerStream.on('error', function(err){
	console.log(err.stack)
})

console.log('读入流执行完毕')

//写入流
var data1 = '百度网站：www.baidu.com'

//创建一个可以写入的流，写入到文件output.txt中
var writerStream = fs.createWriteStream('output.txt')

//使用 utf8 编码
writerStream.write(data1, 'UTF8')

//标记文件末尾
writerStream.end()

//处理流事件 --> finish, and error
writerStream.on('finish', function(){
	console.log('写入成功')
})

writerStream.on('error', function(err){
	console.log('err.stack')
})

console.log('写入流执行完毕')

//管道流--从一个流中获取数据并将数据传递到另外一个流中
//创建一个可读流
var readerStream1 = fs.createReadStream('input1.txt')

//创建一个可写流
var writerStream1 = fs.createWriteStream('output1.txt')

//管道读写操作
//读取 input1.txt 文件内容，并将内容写入到output1.txt中
readerStream1.pipe(writerStream1)

console.log('管道流执行完毕')

//链式流
//接下来我们就是用管道和链式来压缩和解压文件
var zlib = require('zlib')
/*
//压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'))

console.log('文件压缩完成')
*/
// 接下来解压改文件 (将压缩屏蔽检验解压)
// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('inputzip.txt'))

console.log('文件解压完成')
