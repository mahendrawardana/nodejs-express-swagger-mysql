'use strict'

var connection = require('./connection');

module.exports = function() {
	return {

		movieList : [],

		save(movie) {
			connection.acquire(function(err, con) {
				con.query('INSERT INTO movie SET ?', movie, function(err, result) {
					con.release();
					if(err) {
						return 0;
					} else {
						return 1;
					}
				});
			});
		},


		all() {
			connection.acquire(function(err, con) {
				con.query('SELECT * FROM movie', function(err, result) {
					con.release();
					if(err) {
						return 0;
					} else {
						return 1;
					}
				});
			});
		}
	}
};