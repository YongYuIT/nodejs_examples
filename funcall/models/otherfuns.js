module.exports = {
	fun3 : function(res) {
		console.log("我是fun3");
		res.write("hello, fun3\n");
	},
	fun4 : function(res) {
		console.log("我是fun4");
		res.write("hello, fun4\n");
	}
}
