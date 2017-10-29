var http = require('http')

var callback = function (response) {
	response.on('data', function(data) { 
		console.log(data.toString())
	});

	response.on('error', function(err) {
		console.error(err)
	});
}


http.get(process.argv[2], callback)
