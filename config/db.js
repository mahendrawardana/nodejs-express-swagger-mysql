'use strict;'
//Include crypto to generate the movie id
var crypto = require('crypto');
//var connection = require('./connection');

//connection.init();



module.exports = function() {
    return {
        movieList : [],
        /*
         * Save the movie inside the "db".
         */
        save(movie) {
            movie.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
            this.movieList.push(movie);

            console.log('save');

            return 1;           
        },
        /*
         * Retrieve a movie with a given id or return all the movies if the id is undefined.
         */
        find(id) {

            //console.log('find');
            //var todo;
            if(id) {
                return this.movieList.find(element => {
                        return element.id === id;
                    }); 
            }else {
                    /*connection.acquire(function(err, con) {
                        con.query("SELECT * FROM movie", function(err, result, field) {
                            con.release();
                            //console.log(result);
                            //console.log('1');
                            //console.log({id:'123123', title:'title', year: '1991'});
                            console.log(result);
                                    
                        });
                    });*/

                

                /*var query = connection.query('SELECT * FROM movie', function(err, result) {
                  return result;
                }); */

                //return ['title','nama','mahendra'];

                //var nilai = [{'title':'judul','name':'nama'}];
                //console.log(nilai);
                //console.log(this.movieList);

                /*var nilai = [{'nama':'mahendra'}];

                return nilai;*/
                /*console.log('2');
                console.log('--------------------');*/

                /*return getData(function(err, data) {
                    if(err) {
                        console.log("ERROR : ", err);
                    } else {
                        console.log("SUCCESS : ", data);
                        return data;
                    }
                });*/

                /*var sql   = 'SELECT * FROM movie';
                var query = connection.query(sql, function(err, results) {
                    return results;
                });

                console.log(query);*/


                //console.log('query : ', query._results);
                //console.log('end');
                return this.movieList;
            }
        },
        /*
         * Delete a movie with the given id.
         */
        remove(id) {
            var found = 0;
            this.movieList = this.movieList.filter(element => {
                    if(element.id === id) {
                        found = 1;
                    }else {
                        return element.id !== id;
                    }
                });
            return found;           
        },
        /*
         * Update a movie with the given id
         */
        update(id, movie) {
            var movieIndex = this.movieList.findIndex(element => {
                return element.id === id;
            });
            if(movieIndex !== -1) {
                this.movieList[movieIndex].title = movie.title;
                this.movieList[movieIndex].year = movie.year;
                return 1;
            }else {
                return 0;
            }
        }       
    }
};  

function getData(callback) {
    var sql   = 'SELECT * FROM movie';
    var query = connection.query(sql, function(err, results) {
        if(err) {
            callback(err, null);
        } else {
            callback(null, JSON.stringify(results));
        }

    });
}