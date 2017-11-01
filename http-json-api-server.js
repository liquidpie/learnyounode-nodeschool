var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
	var reqUrl = url.parse(req.url, true);
	res.writeHead(200, { 'Content-Type' : 'application/json'});
	if (reqUrl.pathname == '/api/parsetime') {
		var inputDate = new Date(reqUrl.query.iso);
		res.end(JSON.stringify({ 'hour' : inputDate.getHours(), 'minute' : inputDate.getMinutes(), 'second' : inputDate.getSeconds()}));				
	}
	else if (reqUrl.pathname == '/api/unixtime') {
		res.end(JSON.stringify({'unixtime' : new Date().getTime()}));	
	} 
	else {
		res.writeHead(404, { 'Content-Type' : 'text/plain' });
		res.end('Oops!! Not found\n')
	}	
})

server.listen(Number(process.argv[2]))

