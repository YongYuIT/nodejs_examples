var fs = require('fs')
module.exports = {
	readImg : function(path, res) {
		fs.readFile(path, "binary", function(err, file) {
			if (err) {
				console.log(err);
				return;
			} else {
				console.log("读取图片完成");
				res.writeHead(200,  {'Content-Type':'image/jpeg'});
				res.write(file, "binary");
				res.end();
			}
		});
	},
	writefile : function(path, data, recall) {
		fs.writeFile(path, data, function(err) {
			if (err) {
				throw err;
			}
			console.log("异步写文件完成");
			recall("异步写文件完成");
		});
	},
	writefileSync : function(path, data, res) {
		fs.writeFileSync(path, data);
		console.log("同步写文件完成");
		res.write("同步写文件完成");
	},
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
