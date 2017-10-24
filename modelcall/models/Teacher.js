var User = require("./User");
function Teacher(id, name, age) {
	User.apply(this, [id, name, age]);
	this.teach = function(res) {
		console.log(this.name + "老师讲课");
		res.write(this.name + "老师讲课\n");
	}
}
module.exports = Teacher;
