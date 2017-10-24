function oneFun() {
	ii = 0;
	setInterval(function() {
		console.log("aaa=" + new Date());
		ii++;
		if (ii == 3) {
			clearInterval(this);
		}
	}, 1000);
	console.log("oneFun执行完毕");
}

function twoFun() {
	jj = 0;
	setInterval(function() {
		console.log("bbb=" + new Date());
		jj++;
		if (jj == 3) {
			clearInterval(this);
		}
	}, 1000);
	console.log("twoFun执行完毕");
}

oneFun();
console.log("oneFun执行");
twoFun();
console.log("twoFun执行");
console.log("主进程执行完毕");
