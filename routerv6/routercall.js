var http = require('http');
var url = require('url');
var router = require('./models/router');
http.createServer(function (request, response) {
	if(request.url!=="/favicon.ico") {
		var pathname = url.parse(request.url).pathname;
		pathname = pathname.replace(/\//, '');
		try {
			router[pathname](request, response);
		} catch(err) {
			console.log("同步捕获异常:"+err);
			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
			response.write("同步捕获异常:"+err.toString());
			response.end();
		}
		console.log("主程序执行完毕");
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
