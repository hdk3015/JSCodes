/*

Author -- Hardik

Purpose -- Serving static files 

Built-in middleware -- express.static


pre -- We will make a folder 'public' which stores some staic contents like html, css, images etc

*/

var express = require('express')

var app = express()

app.use(express.static('public'))

app.get('/', function(req, res){
    res.send('hello world')
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("server running at https://%s:%s", host, port)
})
/*
1. Run this node file and keep it running 
Now the server is running at localhost:8081
Access resources by manipulating and adding the resource location at the end

like -- 
we have included a dir public
which contains /images/logo.png

Run in any browser -- https://localhost:8081/images/logo.png

*/