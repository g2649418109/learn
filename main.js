var fs = require('fs')
//引入events模块
var events = require('events')

var data = fs.readFileSync('input.txt')
//创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter()

//创建时间处理程序
var connectHandler = function connected(){
	console.log('链接成功')

	//触发 data_received 事件
	eventEmitter.emit('data_received')
}

//绑定connction 事件处理程序
eventEmitter.on('connection', connectHandler)

//使用匿名函数绑定 dada_received 事件
eventEmitter.on('data_received',function() {
	console.log('数据链接成功')
})

//触发conncetion事件
eventEmitter.emit('connection')

console.log(data.toString())
console.log('程序结束')