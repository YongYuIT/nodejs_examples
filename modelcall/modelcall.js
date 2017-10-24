var http = require('http')
var User = require("./models/User");
var Teacher = require("./models/Teacher");
http.createServer(function (request, response) {
	user = new User(1, "张三", 20);
	user.entry(response);
	teacher = new Teacher(2, "李四", 21);
	teacher.entry(response);
	teacher.teach(response);
	response.end();
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
