/*

var fs = require('fs');

var data  = fs.readFileSync('./data.txt');

console.log(data.toString());

console.log('Program Ended');

*/

var fs = require('fs');

fs.readFile('data.txt', function (err, data) {
if(err) return console.log(err);
console.log(data.toString());

});

console.log('Program ended');