var events = require("events");

function UserBean() {
	this.eventEmit = new events.EventEmitter();
	this.zhuce = function() {
		console.log("注册成功");
		this.eventEmit.emit("zhuce", "aaa", "bbb");
	}
	this.login = function(user, pwd) {
		console.log("登录成功: " + user + ", " + pwd);
	}
}

module.exports = UserBean;
