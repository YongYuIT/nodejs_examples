var optfile = require("./optfile");
var url = require("url");
var querystring = require("querystring");
function getRecall(req, res) {
	res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
	function recall(data) {
		res.write(data);
		res.end();
	}
	return recall;
}
module.exports = {
	readImg : function(req, res) {
		res.writeHead(200, {'Content-Type':'image/jpeg'});
		optfile.readImg("./imgs/nodejs.jpg", res);
	},
	writefile : function(req, res) {
		recall = getRecall(req, res);
		optfile.writefile("./file.txt", "异步文件写入", recall);
	},
	login : function(req, res) {
		// get方式接收参数
		console.log("尝试GET方式获接收参数");
		var rdata = url.parse(req.url, true).query;
		if (rdata["email"] != undefined || rdata["pwd"] != undefined) {
			console.log("GET方式接收email:" + rdata["email"]);
			console.log("GET方式接收pwd:" + rdata["pwd"]);
			arr = ["email", "pwd"];
			function recall(data) {
				dataStr = data.toString();
				for (var i=0; i<arr.length; i++) {
					re = new RegExp("{" + arr[i] + "}", "g");
					dataStr = dataStr.replace(re, rdata[arr[i]]);
				}
				res.write(dataStr);
				res.end();
			}
			optfile.readfile("./views/login.html", recall);
			return;
		}
		console.log("POST方式传递参数或未传递参数");

		// post方式接收参数
		var post = "";
		console.log("尝试POST方式接收参数");
		req.on("data", function(chunk) {
			post += chunk;
		});
		req.on("end", function() {
			post = querystring.parse(post);
			if (post["email"] != undefined || post["pwd"] != undefined) {
				console.log("POST方式接收email:" + post["email"]);
				console.log("POST方式接收pwd:" + post["pwd"]);
			} else {
				console.log("未传递参数");
			}

			arr = ["email", "pwd"];
			function recall(data) {
				dataStr = data.toString();
				for (var i=0; i<arr.length; i++) {
					re = new RegExp("{" + arr[i] + "}", "g");
					dataStr = dataStr.replace(re, post[arr[i]]);
				}
				res.write(dataStr);
				res.end();
			}
			optfile.readfile("./views/login.html", recall);
		});
	}
}
