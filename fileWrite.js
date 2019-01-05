/*
fs.writeFile(filename, data[,options], callback)
*/

var fs = require('fs');

fs.writeFile("data.txt", "kya bhai kya haal chaal sab bhadia", function(err){
    if(err)
    return console.error(err);
});

console.log("File Write complete");

//File Read --> 

fs.readFile("data.txt", function(err,data){
    if(err)
    return console.error(err);

    console.log("Data in file --> " + data.toString());
});

console.log("Program ended");

