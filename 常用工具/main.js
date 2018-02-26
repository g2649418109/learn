//util.inherits
var util = require('util')
function Base () {
	// body... 
	this.name = 'base'
	this.base = 1991
	this.sayHello = function () {
		// body... 
		console.log('Hello' + this.name)
	}
}
Base.prototype.showName = function () {
	/* body... */
	console.log(this.name)
}
function Sub () {
	// body... 
	this.name = 'sub'
}
util.inherits(Sub, Base)
var objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)
var objSub = new Sub()
objSub.showName()
// objSub.sayHello()
console.log(objSub)

//util.inspect
function Person () {
	// body... 
	this.name = 'byvoid'
	this.toString = function () {
		/* body... */
		return this.name
	}
}
var obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj, true))

//util.isArray(object)
util.isArray([])
//TRUE
util.isArray(new Array)
//TRUE
util.isArray({})
//FALSE

//util.isRegExp(object)
util.isRegExp(/some regexp/)
  // true
util.isRegExp(new RegExp('another regexp'))
  // true
util.isRegExp({})
  // false

//util.isDate(object)
util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
  // false

//util.isError(object)
util.isError(new Error())
  // true
util.isError(new TypeError())
  // true
util.isError({ name: 'Error', message: 'an error occurred' })
  // false