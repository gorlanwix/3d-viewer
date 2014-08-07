'use strict';

var express = require('express');
var multer = require('multer');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');

// For MongoJS

// var databaseUrl = 'mydb'; // for localhost, we will use a string. once in production, this value must be the domain name of the database as a string
// var collections = ['users', 'models']
// var collections = db.collection('collections'); //temporary filler for collections
// var db = require('mongojs').connect(databaseUrl, collections);

// For Mongoose




var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(multer({ dest: './uploads/'}));

app.post('/server/models', function (req, res) {
    console.log('body', req.body);
    console.log('files', req.files);
});

// Make our db accessible to our router
// app.use(function(req, res, next) {
//     req.db = db;
//     next();
// })

// app.use('/', routes); //delete
// app.use('/users', users); //delete

/// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// Development Settings
if (app.get('env') === 'development') {
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app/')));

    // Development error handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// Production Settings
if (app.get('env') === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    // Production error handling. No stack traces to users
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}


module.exports = app;

