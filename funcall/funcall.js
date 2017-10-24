var http = require('http')
var otherfun1 = require("./models/otherfun1.js");
var otherfuns = require("./models/otherfuns.js");
http.createServer(function (request, response) {
	fun1(response);
	otherfun1(response);
	otherfuns.fun3(response);
	otherfuns['fun4'](response);
	response.end();
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');

function fun1(res) {
	console.log("我是fun1");
	res.write("hello, fun1\n");
}
