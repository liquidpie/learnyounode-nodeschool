var fs = require('fs')
var path = require('path')
var func = function (dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err)
		}

		list = list.filter(function (file) {
			return path.extname(file) === ('.' + ext)
		})
	
		callback(null, list)
	}
	)
}

module.exports = func
