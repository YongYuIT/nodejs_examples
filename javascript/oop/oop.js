function Box() {
	this.name = "Lee";
}

function Desk() {
	this.age = 100;
}
Desk.prototype = new Box();

var desk = new Desk();
console.log(desk.age);
console.log(desk.name);

function box() {
	var age = 100;
	return function() {
		age ++;
		return age;
	}
}

var b = box();
console.log(b());
console.log(b());
