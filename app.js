var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

// connetc db
mongoose.connect('mongodb://localhost/entelapi');

// imports models
require('./models/Tareas');
require('./models/Clients');

// var routers
var home = require('./routes/index');
var clients = require('./routes/clients');

// var allowMethods = function(req, res, next){
//   res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
// }
// var allowCrossTokenHeader = function(req, res, next){
//   res.headers("Access-Control-Allow-Headers", "token");
// }
// var auth = function(req, res, next){
//   if(req.headers.token === "tokenid"){
//     return next();
//   } else {
//     return next(new Error("No autorizado"));
//   }
// }

// var allowCrossOrigin = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//     next();
// }

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// access
// app.use(cors());
// app.use(allowCrossOrigin);
// app.use(allowMethods);
// app.use(allowCrossTokenHeader);

// routers use
var endpoint = '/api/';
app.use('/', home);

app.use(endpoint, clients);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// listen
app.listen(8000);

module.exports = app;
