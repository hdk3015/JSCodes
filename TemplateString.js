/*
Author -- Hardik

Purpose -- Template string

--> Template string is introduced in ES6

--> Replacement to concatnation in a string

*/

var a = 2
var b = 5

var string_1 = 'Hello the sum of two numbers is '+(a+b)+' thankyou!';

console.log(string_1);


//Now this can be replaced using -- > Template strings

/*
Template string uses backticks (`) :: Present in between tab and escape in your keyboard
All the manipulative expressions can be written inside ${}
*/

var string_2 = `Hello now we are using a template string and the sum is ${a+b}`
console.log(string_2);