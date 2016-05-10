var express = require('express');
var path = require('path');
var logger = require('morgan');
var routes = require('./routes/index');
var mail = require('./routes/mail');
var favicon = require('serve-favicon');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname,'favicon.ico')));

app.use('/', routes);
app.use('/mail', mail);

if (app.get('env') === 'development') {
    var webpackMiddleware = require("webpack-dev-middleware");
    var webpack = require('webpack');

    var config = require('./webpack.config');

    app.use(webpackMiddleware(webpack(config), {
        publicPath: "/",

        headers: {"X-Custom-Webpack-Header" : "yes" },

        stats: {
            colors: true
        }
    }));
}

app.use(function(req, res, next) {
    var err = new Error('not found');
    err.status = 404;
    next(err);
});

module.exports = app;
