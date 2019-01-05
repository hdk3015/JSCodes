/*
Author -- Hardik
Purpose -- URL Modules Node

The Built in URL Module

The URL Module splits up a web address(Request -- URL) into readable parts.
*/

/* Require module */

var url = require('url')

/* Parse an address with url.parse() method, and it will return an URL Object with each
part of the address as properties */

/* Spliting a web address into readable parts */

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr, true);

/* url.parse returns an object --
 { 'host':'localhost:8080', 'pathname':'/default.htm', 'search':'?year=2017&month=february' }
*/

console.log(q.host); // gives the value of 'host' as output
console.log(q.pathname); // gives the value of 'pathname' as output
console.log(q.search); // gives the value of 'search' as output

var qdata = q.query;
//returns an object : {year:2017, month:'february'}

console.log(qdata.month);
console.log("");

console.log("Example 2 -->");

var link = 'http://facebook.com/loginAuth.htm?userid=hardikgupta&pass=pass@123';

var v = url.parse(link, true);

/* url.parse returns an object --
 { 'host':'facebook.com', 'pathname':'/loginAuth.htm', 'search':'?userid=hardikgupta&pass=pass@123'}
*/

console.log('host --> ' +v.host); // gives the value of 'host' as output
console.log('pathname --> '+v.pathname); // gives the value of 'pathname' as output
console.log('search parameters --> '+v.search); // gives the value of 'search' as output

var auth_data = v.query;
//returns an object : {userid:'hardikgupta', pass:'pass@123'}

console.log('USERID --> '+auth_data.userid);
console.log('Password --> '+auth_data.pass);


console.log("");
console.log("Example 3 -->")


var Sense_data = 'coap://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]/sersorDataDisplay.htm?temp=47.5&humidity=71'
var node_data = url.parse(Sense_data);

console.log('host --> '+node_data.host);
console.log('pathname --> '+node_data.pathname);
console.log('search --> '+node_data.search);

var data = node_data.query;
