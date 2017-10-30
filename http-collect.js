var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {

	response.pipe(bl(function (err, data) {
		var contents = data.toString()
		console.log(contents.length);
		console.log(contents);
	}));
})
