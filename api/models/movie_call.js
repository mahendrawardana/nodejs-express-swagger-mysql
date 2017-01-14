var connection = require('../../config/connection');
connection.init();

module.exports.row = function(year, callback) {
	connection.acquire(function(err, con) {
        con.query('SELECT * FROM movie WHERE year = ?', year, function(err, result) {
            con.release();
            callback(err, result);
        });
    });
}

module.exports.getAll = function(callback) {
	connection.acquire(function(err, con) {
		con.query('SELECT * FROM movie', function(err, result) {
			con.release();
			callback(err, result);
		});
	});
}

module.exports.delete = function(year, callback) {
	connection.acquire(function(err, con) {
		con.query('DELETE FROM movie WHERE year = ?', year, function(err, result) {
			con.release();
			callback(err, result);
		});
	});
}