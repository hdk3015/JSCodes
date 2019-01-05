var fs = require('fs');

var zlib = require('zlib');

fs.createReadStream("input.zip").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("input.txt"));

console.log("Decompression complete!");