//Compressing files using chaining

var fs = require('fs');

var zlib = require('zlib');

//compress the file input.txt to input.txt.gz_
fs.createReadStream('data.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.zip'));

console.log("Compression complete");