var fs = require('fs');

console.log("**Opening file**");

fs.open("input.txt", 'r+', function(err, data){
    if(err){
        return console.error(err);
    }
    console.log("File opened successfully!");
});

fs.stat("input.txt", function(err, stats){
    if(err) throw err;
    console.log(stats);
    console.log("hello err");
    console.log("is file? " + stats.isFile());
});

fs.stat("./", function(err, stats){
    if(err) throw err;
    console.log("is directory "+stats.isDirectory());
});

console.log("Program ended");
