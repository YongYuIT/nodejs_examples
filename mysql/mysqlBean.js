var mysql = require("mysql");

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "123456",
	database : "test",
	port : "3306"
});

connection.connect(function(err) {
	if (err) {
		console.log("connect failed:" + err);
		return;
	}
	console.log("connect ok");
});

var userAddSql = "insert into user(uname, pwd) values(?, ?)";
var param = ["bbb", "bbb"];
connection.query(userAddSql, param, function(err, rs) {
	if (err) {
		console.log("insert failed:" + err);
		return;
	}
	console.log("insert ok");
});

connection.query("select * from user where uid>?", [0], function(err, rs) {
	if (err) {
		console.log("select failed:" + err);
		return;
	}
	for (var i=0; i<rs.length; i++) {
		console.log("result:" + rs[i].uname);
	}
});

connection.end(function (err) {
	if (err) {
		console.log("end failed:" + err);
		return;
	}
	console.log("end ok");
});
