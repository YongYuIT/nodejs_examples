var async = require("async");

function exec() {
	async.waterfall([
		function(done) {
			ii = 0;
			setInterval(function() {
				console.log("aaa=" + new Date());
				ii++;
				if (ii == 3) {
					clearInterval(this);
					done(null, "one执行完毕");
				}
			}, 1000);
		},
		function(preValue, done) {
			jj = 0;
			setInterval(function() {
				console.log(preValue + ", bbb=" + new Date());
				jj++;
				if (jj == 5) {
					clearInterval(this);
					done(null, preValue + ", two执行完毕");
				}
			}, 1000);
		}
	], function(err, rs) {
		console.log(err);
		console.log(rs);
	});
}

exec();
console.log("主进程执行完毕");
