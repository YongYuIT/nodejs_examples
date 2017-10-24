var fs = require('fs')
module.exports = {
	readfile : function(path, recall) {
		fs.readFile(path, function(err, data) {
			if (err) {
				console.log(err);
			} else {
				recall(data);
			}
		});
		console.log("异步方法执行完毕");
	},
	readfileSync : function(path, res) {
		var data = fs.readFileSync(path, "utf-8");
		console.log(data);
		console.log("同步方法执行完毕");
		res.write(data);
	}
}
