var connection = require('../../config/connection');
connection.init();

function Movie() {

	this.movieList = function(res) {
		connection.acquire(function(err, con) {
            con.query('SELECT * FROM movie', function(err, result) {
                con.release();
                var respon = {movies: result};
                res.json(respon);
            });
        });
	}

	this.row = function(res, year) {
		var nada = 0;
		connection.acquire(function(err, con) {
			con.query('SELECT * FROM movie WHERE year = ?', year, function(err, result) {
				con.release();
				res.json(result);
			});
		});
	}

	this.ari = function() {
		return [1,2];
	}

}

module.exports = new Movie();