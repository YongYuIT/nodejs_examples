var mysql = require("mysql");

function OptPool() {
	this.flag = false;
	this.pool = mysql.createPool({
		host : "localhost",
		user : "root",
		password : "123456",
		database : "test",
		port : "3306"
	});

	this.getPool = function() {
		if (!this.flag) {
			this.pool.on("connection", function(connection) {
				connection.query("SET SESSION auto_increment_increment=1");
				this.flag = true;
			});
		}
		return this.pool;
	}
}

module.exports = OptPool;
