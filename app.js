var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('This an app published from Github.');
});

app.get('/ping.json', function(req, res) {
        res.send({'success': true});
});

var server = app.listen(8080);
