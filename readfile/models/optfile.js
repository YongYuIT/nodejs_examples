var fs = require('fs')
module.exports = {
	readfileSync : function(path, res) {
		var data = fs.readFileSync(path, "utf-8");
		console.log(data);
		console.log("同步方法执行完毕");
		res.write(data);
	}
}
