var fs = require('fs');

var data = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
//Create write stram
var writeStream = fs.createWriteStream("output.txt");
//Write data with encoding --> 

writeStream.write(data, 'UTF-8');

//Mark end of file

writeStream.end();

//Handle stream events --> finish and error

writeStream.on('finish', function(){
    console.log("Write complete");
});

writeStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program ended");


