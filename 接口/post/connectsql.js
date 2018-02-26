var mysql = require('mysql')

//链接数据库 onedb
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'onedb',
	port:3306
})
connection.connect() 
module.exports = connection