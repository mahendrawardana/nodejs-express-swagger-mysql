'use strict';
    // Include our "db"
    var db = require('../../config/db')();
    var movie = require('../models/movie');
    var movie_call = require('../models/movie_call');



    // Exports all the functions to perform on the db
    module.exports = {getAll, save, getOne, update, delMovie};

    //GET /movie operationId
    function getAll(req, res, next) {
        //movie.row(res, 1991);
        var year = 1991;
        movie_call.getAll(function(err, result) {
            res.json({movies: result});
        });

        //res.json(['1']);
    }
    //POST /movie operationId
    function save(req, res, next) {
        res.json({success: db.save(req.body), description: "Movie added to the list!"});
    }
    //GET /movie/{id} operationId
    function getOne(req, res, next) {
        var year = req.swagger.params.year.value; //req.swagger contains the path parameters
        movie_call.row(year, function(err, result) {
            if(result) {
                res.json(result);
            }else {
                res.status(204).send();
            }       
        });
    }
    //PUT /movie/{id} operationId
    function update(req, res, next) {
        var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        var movie = req.body;
        if(db.update(id, movie)){
            res.json({success: 1, description: "Movie updated!"});
        }else{
            res.status(204).send();
        }

    }
    //DELETE /movie/{id} operationId
    function delMovie(req, res, next) {
        var year = req.swagger.params.year.value; //req.swagger contains the path parameters
        movie_call.delete(year, function(err, result) {
            if(err) {
                res.status(204).send();
            }
            res.json({success: 1, description: "Movie deleted!"});
        });

    }