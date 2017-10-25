var OptPool = require("./models/OptPool");

var optPool = new OptPool();
var pool = optPool.getPool();

pool.getConnection(function(err, conn) {
	var userAddSql = "insert into user(uname, pwd) values(?, ?)";
	var param = ["eee", "eee"];
	conn.query(userAddSql, param, function(err, rs) {
		if (err) {
			console.log("insert failed:" + err);
			return;
		}
		console.log("insert ok");
	});

	conn.query("select * from user", function(err, rs) {
		if (err) {
			console.log("select failed:" + err);
			return;
		}

		for (var i=0; i<rs.length; i++) {
			console.log(rs[i].uname);
		}

		conn.release();
	});
});
