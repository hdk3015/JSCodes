/*
fs.read(fd, buffer, offset, length, position, callback)
*/

var fs = require('fs');

var buf = new Buffer(1024);

fs.open("input.txt",'r+', function(err, data){

    if(err){
        return console.error(err);
    }
    console.log("File open success");
    fs.read(data, buf, 0, buf.length,0, function(err, d){
        if(err)
        return console.error(err);
        
        console.log("bytes read --> "+ d);
        if(d>0)
        {
            console.log("data in file --> " + buf.slice(0,d).toString());
        }
    });


    //Synce read 

    var read = fs.readSync(data, buf, 0,buf.length, 0);
    console.log("Sync read - --> "+read);
    //Closing file-->
    fs.close(data, function(err){
        if(err)
        return console.error(err);
    }); 
    console.log("File close success");
});