var net = require('net')
var port = +process.argv[2]

var server = net.createServer (function (socket) {
		var date = new Date();
		var d = date.getDate();
		if (d < 10) {
			d = '0' + d;
		}
		var m = 1 + date.getMonth()
		if (m < 10) {
			m = '0' + m;
		}
		var data = date.getFullYear() + '-' + m + '-' + d + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';
		socket.write(data);
		socket.end();
	}
)

server.listen(port)
