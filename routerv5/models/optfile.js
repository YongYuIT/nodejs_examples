var fs = require('fs')
module.exports = {
	readImg : function(path, res) {
		fs.readFile(path, "binary", function(err, file) {
			if (err) {
				console.log(err);
				return;
			} else {
				console.log("异步读取图片完成");
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
	readfile : function(path, recall) {
		fs.readFile(path, function(err, data) {
			if (err) {
				console.log(err);
			} else {
				recall(data);
			}
		});
		console.log("异步读文件完成");
	},
}
