var optfile = require("./optfile");
module.exports = {
	writefile : function(req, res) {
		function recall(data) {
			res.write(data);
			res.end();
		}
		optfile.writefile("./file.txt", "异步文件写入", recall);
	},
	writefileSync : function(req, res) {
		optfile.writefileSync("./sync.txt", "同步文件写入", res);
		res.end();
	},
	login : function(req, res) {
		function recall(data) {
			res.write(data);
			res.end();
		}
		optfile.readfile("./views/login.html", recall);
	},
	zhuce : function(req, res) {
		function recall(data) {
			res.write(data);
			res.end();
		}
		optfile.readfile("./views/zhuce.html", recall);
	}
}
