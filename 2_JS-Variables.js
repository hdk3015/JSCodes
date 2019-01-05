/*
Author -- Hardik

Purpose -- 

JAVASCRIPT VARIABLE --> 
A variable by defination is a named space in memory that stores value.
In other words, it acts as a container for values in a program

Variable names are called identifiers.

-> Identifiers cannot be keywords.

-> can contain alphabets and numbers

->Identifiers cannot contain spaces and special characters except the 
underscore(_)and dollar signs($).

->Variables names cannot begin with a number/

Syntax -->

JS Declaration -- >
var variable_name

ES6 introduced Declaration -->
    -> Using let.
    -> Using const.

Variable initialization --> 

var variable_name = value
*/

/* Using Var keyword --> */
var var1;

/* Initializing Var --> */
var1 = "Hello welcome to my program";
/* Using Var for output--> */
console.log("The value of var -- " +var1);


/*
Dynamic typing -- 

JS is an un-typed language.

** This means that a Javascript variable can hold value of any data type.

---------------------------------------
---------------------------------------

JS Variable scope -- 

Region which is specific for the variable defined.

* Global Scope -- A varibale with the global scope can be
accessed from within any part of the Javascript code.   

* Local Scope -- A variable with a local scope can be 
accessed from within a function where it is declared.
*/


var num = 10
function test(){
    var num = 25
    console.log("Local variable num --> " +num);
}

console.log("Global variable num --> " +num);
test()


/*
Let and block scope -- >
The block scope restricts a variable`s access to the block in which
it is declared.

The var keyword assigns a function scope to the variable.

The let keyword allows the script to restrict access to the variables
to the nearest enclosed block.

*/

function block_test(){
var num = 100
console.log("Value of num in function() " +num)
{
    console.log("Inner block begins")
    let num = 200;
    console.log("Value of num : "+num)
}
}

block_test()

/*
The const keyword -- 
->Read only refrence
->Holds an immutable value
->no redeclaration and reassignment
->Requires an assignment.
*/

const x = "hello"
/* x = 15 //Will result an error */
console.log(x);

/*
ES6 and variable hosting
-> The scope of a variable declared with var is its current
execution context ie. either the enclosing function, if outside the function, Global.
-> Variable hosting allows use of variable in a JS Program, even before
it is declared
*/

var main = function(){
    for(var x=0;x<5;x++)
    {
        console.log(x);
    }
    console.log("x can be accessed outside the block of scope x value is --> "+x);
    console.log("x is hoisted to the function scope");
}
main();
/*
Output -- 
0
1
2
3
4
x can be accessed outside the block scope x value is :5
x is hoisted to the function scope.

The JS Engine internally represents the script as -- 

var main = function() {
   var x; // x is hoisted to function scope
   for( x = 0;x<5;x++) {
      console.log(x);
   }
   console.log("x can be accessed outside the block scope x value is :"+x);
   console.log('x is hoisted to the function scope');
}
 main();

*Note -- The concept of hoisting applies to variable declaration but not variable inintialization.
So recommended to always declare variables at the top of their scope(to the top of global code and top of function),
to enable the code resolve the variable`s scope.
*/

