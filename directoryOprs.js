var fs = require('fs');

//create directory -- fs.mkdir(path[, mode], callback)

fs.mkdir("./test/hello", function(err){
    if(err){
        return console.error(err);
    }
    console.log("directory created");
});


// read a dir -- fs.readdir(path, callback)

fs.readdir("./", function(err, files){
    if(err)
    return console.error(err);
    
    files.forEach(function (file){
        console.log(file);
    });

});


//remove a dir  -- fs.rmdir(path, callback)


fs.rmdir("./test/bit", function(err){
    if(err)
    return console.error(err);
    console.log("File removed");
});