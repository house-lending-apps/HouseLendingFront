var http = require('http');
var fs = require('fs');
var express = require('express');

var config = JSON.parse(fs.readFileSync('config/appconfig.json'));
var host = config.host === undefined ? 'localhost' : config.host;
var port = config.port === undefined ? '9000' : config.port;
var template_dir = config.client_template;

var app = express();

console.log('template_dir : ', template_dir);

app.use('/', express.static(__dirname + '/'));

//using default url with username
//app.listen(port, host);
app.listen(port);

fs.watchFile('config/appconfig.json', function (current, previous) {
    config = JSON.parse(fs.readFileSync(
        'config/appconfig.json'));
    app.stop();
    app.listen(port, host);
    host = config.host;
    port = config.port;


    template_dir = config.client_template;
});

