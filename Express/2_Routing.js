/*
Author -- Hardik
Purpose -- Understand Express rounting

Request and response -->
Express applications uses a callback function whose parameters are request and response objects


syntax :: 
app.get('/', function(req, res){
    // --
})

Request Object -- 
Represents the HTTP request and has properties for the request query string, parameters, bod, HTTP Header and so on.

Response Oject -- 
Represents the HTTP response that an Express app sends when it gets an HTTP request

Req & res objects contain a llot of useful informations related to HTTP Request and responses inclucding cookies, session, URL etc.

Basic Routing -- 

-> Determination of how an application will respond to client request to a particular 
endpoint, which is URI(pathname)
and specific HTTP request methods like 
->GET
->POST
->DELETE
->PUT
*/

var express = require('express')
var app = express()

// This responds with "HELLO WORLD!" on the homepage

app.get('/', function(req, res){
    console.log("Got a GET request for the homepage")
    res.send('HELLO Get!')
})

//This will respond to POST request for homepage
app.post('/', function(req, res){
    console.log('Got a post request for the homepage')
    res.send('Hello post')
})

app.delete('/del_user', function(req, res){
    console.log('Got a delete request for the /del_user')
    res.send('hello del')
})

app.get('/list_user', function(req, res){
    console.log('Got a get request for /list_user')
    res.send('Page Listing')
})

app.get('/ab*cd', function(req, res){
    console.log('Got a get request for /ab*cd')
    res.send('Page pattern match')
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host,port)
})
