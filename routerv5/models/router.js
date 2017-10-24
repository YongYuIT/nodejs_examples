var optfile = require("./optfile");
function getRecall(req, res) {
	res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
	function recall(data) {
		res.write(data);
		res.end();
	}
	return recall;
}
module.exports = {
	readImg : function(path, res) {
		res.writeHead(200, {'Content-Type':'image/jpeg'});
		optfile.readImg("./imgs/nodejs.jpg", res);
	},
	writefile : function(req, res) {
		recall = getRecall(req, res);
		optfile.writefile("./file.txt", "异步文件写入", recall);
	},
	login : function(req, res) {
		recall = getRecall(req, res);
		optfile.readfile("./views/login.html", recall);
	},
	zhuce : function(req, res) {
		recall = getRecall(req, res);
		optfile.readfile("./views/zhuce.html", recall);
	}
}
