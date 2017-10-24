function User(id, name, age) {
	this.id = id;
	this.name = name;
	this.age = age;
	this.entry = function(res) {
		console.log(this.name + "进入图书馆");
		res.write(this.name + "进入图书馆\n");
	}
}
module.exports = User;
