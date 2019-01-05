var http = require('http');

http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end("Hello world");
}).listen(3015);

console.log("Server running at localhost:3015");