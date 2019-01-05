/*
Author -- Hardik
Purpose -- Hello world program using express frameword=k
-> Starts a http server and listens for http requests
-> Responds to hello world for request to the homepage.
-> For every other page, respond 404 NOT FOUND
*/


var express = require('express');
var app = express();

app.get('/', function(req, res)
{
    res.send('Hello World');
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})
