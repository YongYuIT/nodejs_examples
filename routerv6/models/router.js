var optfile = require("./optfile");
var exception = require("./Exception");
function getRecall(req, res) {
	res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
	function recall(data) {
		res.write(data);
		res.end();
	}
	return recall;
}
module.exports = {
	testexp : function(req, res) {
		recall = getRecall(req, res);
		try {
			data = exception.expfun(0);
			recall(data);
		} catch(err) {
			console.log("捕获自定义异常:"+err);
			recall("捕获自定义异常:" + err.toString());
		}
	},
	readImg : function(req, res) {
		res.writeHead(200, {'Content-Type':'image/jpeg'});
		optfile.readImg("./imgs/nodejs.jpg", res);
	},
	writefile : function(req, res) {
		recall = getRecall(req, res);
		optfile.writefile("./file.txt", "异步文件写入", recall);
	},
	login : function(req, res) {
		recall = getRecall(req, res);
		optfile.readfile("./views/loginx.html", recall);
	},
	zhuce : function(req, res) {
		recall = getRecall(req, res);
		optfile.readfile("./views/zhuce.html", recall);
	}
}
