var fs = require('fs');

//Async read :: 

fs.readFile("input.txt", function(err, data){
    if(err)
{
    return console.error(err);
}
console.log("Async --> " + data.toString());
});


var data = fs.readFileSync("input.txt");
console.log("Sync --> "+ data.toString());

console.log("Program ended");
