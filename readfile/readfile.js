var http = require('http');
var optfile = require("./models/optfile");
http.createServer(function (request, response) {
	optfile.readfileSync("./views/login.html", response);
	console.log("主程序执行完毕");
	response.end();
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
