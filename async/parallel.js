var async = require("async");

function exec() {
	async.parallel({
		one : function(done) {
			ii = 0;
			setInterval(function() {
				console.log("aaa=" + new Date());
				ii++;
				if (ii == 3) {
					clearInterval(this);
					//done("出错", {one:"one执行完毕"});
					done(null, {one:"one执行完毕"});
				}
			}, 1000);
		},
		two : function(done) {
			jj = 0;
			setInterval(function() {
				console.log("bbb=" + new Date());
				jj++;
				if (jj == 5) {
					clearInterval(this);
					done(null, {two:"two执行完毕"});
				}
			}, 1000);
		}
	}, function(err, rs) {
		console.log(err);
		console.log(rs);
	});
}

exec();
console.log("主进程执行完毕");
