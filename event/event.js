var events = require("events");
var UserBean = require("./models/UserBean");

user = new UserBean();
user.eventEmit.once("zhuce", function(uname, pwd) {
	console.log("收到注册成功监听");
	user.login(uname, pwd);
});
user.zhuce();
