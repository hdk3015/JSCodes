var express = require('express')

var app = express()

app.use(express.static('public'))

app.get('/index.htm', function(req, res){
    res.send(__dirname+'/'+'index.htm');
})

app.get('/process_get', function(req, res){

    userData = {
        name: req.query.name,
        email:req.query.email,
        location:req.query.location
    };

    console.log(userData);
    res.end(JSON.stringify(userData))
})

var server = app.listen(8081, function(){
console.log('server running at port 8081');
})