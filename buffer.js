buf1 = new Buffer(256)
len = buf1.write('www.runoob.com')

console.log('写入字节数：' + len)

buf = new Buffer(26)
for(var i = 0; i < 26; i++) {
	buf[i] = i + 97
}

console.log(buf.toString('ascii'))
console.log(buf.toString('ascii',0,5))
console.log(buf.toString('utf8',0,5))
console.log(buf.toString(undefined,0,5))

buf2 = new Buffer('www.baidu.com')
var json = buf2.toJSON(buf2)

console.log(json)

var buffer = Buffer.concat([buf1, buf2,buf])
console.log("buffer3 内容: " + buffer.toString())

//buffer比较
var buffer1 = new Buffer('ABCE')
var buffer2 = new Buffer('ABCD')
var result = buffer1.compare(buffer2)
console.log(result)
if(result < 0) {
	console.log(buffer1+'在' + buffer2 + '之前')
} else if(result === 0){
    console.log(buffer1+'与' + buffer2 + '相同')
} else {
	console.log(buffer1+'在' + buffer2 + '之后')
}

//拷贝缓冲区
var bufferx = new Buffer('ABC')
var buffery = new Buffer(3)
bufferx.copy(buffery)
console.log('buffery content:' + buffery.toString())

//缓冲区裁剪
var bu1 = new Buffer('runoob')
var bu2 = bu1.slice(0,2)
console.log('bu2 content: ' + bu2.toString())

//缓冲区长度
console.log(bu2.length)