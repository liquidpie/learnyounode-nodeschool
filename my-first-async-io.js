var fs = require('fs')

fs.readFile(process.argv[2], 'UTF-8', function doneRead(err, contents) {
	if (err) {
		console.log("error in reading file")
	}
	console.log(contents.split('\n').length - 1)
}
)
