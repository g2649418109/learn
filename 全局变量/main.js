// 输出全局变量
console.log(__filename)

console.log(__dirname)

function printHello () {
	// body... 
	console.log('hello world')
}
setTimeout(printHello, 2000)

// clearTimeout(setTimeout(printHello, 2000))
// setInterval(printHello, 2000) // 定时器两秒执行一次


//console
console.info('程序开始执行：')
var counter = 10
console.log('计数：%d',counter)

console.time("获取数据")
console.timeEnd('获取数据');

console.info("程序执行完毕。")


//process
process.on('exit', function (code) {
	/* body... */
	// 以下代码永远不会执行
	setTimeout(function () {
		/* body... */
		console.log('该代码永远不会执行')
	}, 0)
	console.log('退出码为：', code)
})
console.log('程序执行完毕')

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);