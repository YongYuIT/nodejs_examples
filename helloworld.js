var http = require('http')
http.createServer(function (request, response) {
	console.log('访问');
	response.write('hello, world');
	response.end();
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
