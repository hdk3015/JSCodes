var fs = require('fs');

//create a readable stream

var readStream = fs.createReadStream("data.txt");

//Create write stream

var writeStream = fs.createWriteStream("output.txt");

//create pipe from readStream to writeStream -->

readStream.pipe(writeStream);

console.log("Piping finished -- Program Ended!");

