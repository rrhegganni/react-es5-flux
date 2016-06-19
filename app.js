var express = require('express');
var path = require('path');
var React = require('react');

import {server} from './src/js/server';

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'dist')));
var markup = server;
app.get('/', function(req, res) {

	res.render('index', {
    markup: markup
	});
});

app.listen(3030);

console.log("app is listening on port 3030");
