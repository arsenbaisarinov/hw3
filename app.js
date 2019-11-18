var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.set('Views', path.join(__dirname, 'Views'));

app.get('/register', function(req, res) {
    res.render('register');
});

app.post('/register', urlencodedParser, function(req, res) {
    res.render('register-success', {data: req.body});
});

app.listen(3000);