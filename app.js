var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var main = require('./routes/index');
var clothes = require('./routes/clothes');
var food = require('./routes/food');
var electronics = require('./routes/electronics');

var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// the routes:

app.use('/', main);
app.get('/clothes', clothes);
app.get('/food', food);
app.get('/electronics', electronics);

app.listen(3000);
console.log('server started at port 3000');
