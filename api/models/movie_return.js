'use strict;'
var connection = require('../../config/connection');
connection.init();

module.exports = function() {
    return {
    	row() {
    		connection.acquire(function(err, con) {
	            con.query('SELECT * FROM movie', function(err, result) {
	                con.release();
	                var respon = {movies: result};
	                return respon;
	            });
	        });
        }      
    }
};  