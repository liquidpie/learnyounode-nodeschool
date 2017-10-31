var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) { 
	res.writeHead(200, {'contentType' : 'text/plain'});
	var srcStream = fs.createReadStream(process.argv[3]);
	srcStream.pipe(res);	
})

server.listen(Number(process.argv[2]))
