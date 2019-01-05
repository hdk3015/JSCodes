/*
Author -- Hardik
Purpose -- URL Modules Node

Node.js File Server

purpose -- Make a node.js file server which listens to request and serves the file to the client

// create 3 files(html - pages)(home.html, index.html, aboutus.html)

*/


/* Node js file that opens the requested file and returns the content to client,if any error throw a 404 error */

var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req, res)
{
    var q = url.parse(req.url, true);
    var filename = "."+q.pathname;
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'});
            res.end('<h1>404, Page not found');
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(5055)

/* How to run 

-> run node 2_FileServer.js in node terminal(make the server running)
-> open browser and make client request to open html pages 

localhost:5055/home.html
localhost:5055/index.html
localhost:5055/aboutus.html
*/




    