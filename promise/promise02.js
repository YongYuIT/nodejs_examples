function fetchPage() {
	console.log("fetchPage");
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve("Page data");
		}, 1000);
	});
}

fetchPage().then(function(data) {
	console.log(data);
});
