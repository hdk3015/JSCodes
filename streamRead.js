var fs = require('fs');

var data = "";

//Create a readable stream
var readerStream = fs.createReadStream("Data.txt");

//Set encoding to UTF-8
readerStream.setEncoding('UTF-8');

//handle stream events -- > data, err, and end
readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end', function()
{
    console.log(data);
});

readerStream.on('error', function(err){
console.log(err.stack);
});


console.log("Program ended");
