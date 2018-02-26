//Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
// exports.word = function () {
// 	/* body... */
// 	console.log('hello.js 文件中的function(world)')
// }

function Hello() {
	var name ;
	this.setName = function (thyName) {
		/* body... */
		name = thyName
	}
	this.sayHello = function () {
		/* body... */
		console.log('Hello ' + name)
	}
}
module.exports = Hello //模块接口方式