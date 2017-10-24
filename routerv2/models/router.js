var optfile = require("./optfile");
module.exports = {
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
