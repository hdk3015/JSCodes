/*
 fs.unlink("file", function())
*/

var fs = require('fs');

var filename = "";//give file name here

fs.unlink(filename, function(err){
    if(err)
    return console.error(err);
});

console.log("file deletion succesfull");