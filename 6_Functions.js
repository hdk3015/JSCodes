/*
Author -- Hardik
Purpose -- JS Functions --

Functions are building blocks of readable, maintainable and reusable code.
Functions are defined using the function keyword.

function function_name(){
    //function body
}

To force execution of the function, it must be called.

->function invoking 

function_name()
*/

//Define a function

function test(){
    console.log("Hello, test function is called")
}
test()


/* Classification of functions*/

/* Returning functions --> Returns valus along with the control, back to the caller 
    syntax ::

    function function_name(){
        //statements
        return value;
    }

    -> Must end with a return statement
    -> Can return at most 1 value, One return statement per function
    -> Return statement should be last in the function
*/

function retStr(){

    return "hello world!!"
}

var val = retStr()
console.log(val)

/* Parameterized Functions -- 
    Mechanism to pass values to the functions.
    Parameters form a part of the function`s signature.
    Parameter Values are passed to the function during the invocation, Unless specified explicitly.

    Syntax ::
    function function_name(param1,param2,param3,...)
    {
        .......
        .......
    }
 */

 function add(num1, num2) //Function declaration 
 {
     console.log(num1+num2)
 }
 add(2,5) //Function invoking

/* Default function parameters 
 ES6, a function allows the parameters to be initialized with default values, if no values are passes to it or is undefined.
*/

function add_func(a, b=1)
{
    return a+b;
}

console.log(add_func(4))

/* Rest Parameter -- 
Rest parameters are similar to variables arguments in java.
Rest parameters doesnt restrict the numbers of values that you can pass to a function.
However the values passed must all be of the same type.
In Other words, rest parameters acts as placeholders for multiple arguments of the same type.

to declare a rest parameter, the parameter name is prefixed with three periods, known as the spread operator.
*/

function fun1(...params)
{
    console.log(params.length);
}

fun1();
fun(3);
fun(5,4,2);
/* Note -- Rest parameters should be the last in the function`s parameter list */



/* ANONYMOUS FUNCTIONS 
Functions that are not bound to an identifier(function name)
are called anonymous functions. These functions are dynamically declared at runtime.
Anonymous functions can accept inputs and return outputs, just as a standard function does.
An anonymous function is usually not accessible after its initial creation.

Variables can be assigned to an anonymous function. Such an expression is called a function expression

Syntax :: 
var res = function( [args] ){ .. .. .. }

*/


var f = function(){
    return "hello anonymous function"
}
console.log(f())

/* Anonymous parameterized function */

var func = function(x,y){
    return x*y
}
function product(){
    var result;
    result = func(5,4)
    console.log("The product --> "+result)
}
product()

/* Function constructor 
-> Functions can be dynamically created using the constructor function() along with the new operator

syntax :: 
var variable_name = new Function(args1, args2, args3...., "function-body");

-> The function() constructor expects any number of strings arguments, The last argument is the body of the function - it can contain arbitrary JS statements,
 seperated from each other by semicolons

->The function() constructor is not passed any arguments that specifies a name for the function it creates
*/

var func = new Function("x","y","return x*y;");
function product(){
    var result = func(10,20);
    console.log("The product is --> "+result);
}
product();


/* Recursion 
-> technique for iterating over an an operation by having a function call
itself repeatedly until it arrives at a result.
Recursion is best applied when you need to call the same function repeatedly
with different parameters from within a loop
*/

function factorial(num)
{
    if(num<=0)
    {
        return 1
    }
    else{
        return (num*factorial(num-1))
    }
}
console.log(factorial(6))


/* Anonymous Recursive function */

(function(){
    var msg = "heloo world"
    console.log(msg)
})() //This function calls itself using a pair of parentheses().

/* Lambda functions 
-> refers to anonymous functions in programming.
Lambda functions are a concise mechanism to represent anonymous functions, also called Arrow functions

Anatomy -- 
->Parameters
->lambda Notation(=>)
->statements

syntax ::
([param1,param2,....,paramN])=>statement;
*/

var foo = (x)=>10+x;
console.log(foo(10))

/* Lambda Statement 
It is an anonymous function declaration that points to a block of
code. This syntax is used when the function body spans multiple lines.

syntax ::
([param1, param2, .. , paramN])=>{
    //code block
}
*/

var msg = ()=>{
    console.log("function invoked")
}
msg()


/* Syntactic variations */

var msg = x=>{
    console.log(x)
}
msg(10)

//optional braces for a single statement. Empty parantheses for no parameters

var disp = () => console.log("hello world")
disp()


/* Function hoisting 
->Like variables, functions can also be hoiseted.
*/

hoist_function()
function hoist_function(){
    console.log("Hoisted function running")
}

/*
-> However, function expressions cannot be hoisted.

hoist_function(); //TypeError: hoist_function() is not a function
var hoist_function() = function(){
    console.log("bar");
}
*/


/* Immediately Invoked function expression 
IIFEs - can be used to avoid variable hoisting from within blocks.
It allows public access to methods while retaining privacy for variables defined within the function.
This pattern is called as a self-executing anonymous function
*/

//Example-1 - IIFE

var main = function(){
    var loop = function(){
        for(var x=0;x<5;x++){
            console.log(x)
        }
    }();

    console.log("x can not be accessed outside the block scope x value --> "+x);
}
main();

//Example-2 - IIFE

var main = function () {
    (function () {
        for (var x = 0; x < 5; x++) {
            console.log(x);
        }
    })();
    console.log("x can not be accessed outside the block scope x value is :" + x);
}
main();

/*

Output -- 1 & 2 -->

0
1
2
3
4
Uncaught ReferenceError: x is not define

*/

/* Generator functions 
->When a normal function is invoked, The control rests with the function called until it returns.
With genrators in ES6, the caller function can now control the execution of a called function.
A generator is like a regular function except that --

-> The function can yeild control back ti the caller at any point
->When you call a generator, it doesnt run right away.
Instead you get back an iterator. The function runs as you call the iterators next method

Generators are denoted by suffixing the function keyword with an asterisk; otherwise, their syntax is identical to the regular function
*/

"use strict"
function* rainbow(){
    //the asterisk marks this as a generator
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet'; 

}
for (let color of rainbow()) {
    console.log(color); 
}
/*
Generators enable two-way communication between the caller and the called function. This is accomplished by using the yield keyword.
*/

function* ask() {
    const name = yield "What is your name?";
    const sport = yield "What is your favorite sport?";
    return `${name}'s favorite sport is ${sport}`;
}
const it = ask();
console.log(it.next());
console.log(it.next('Ethan'));
console.log(it.next('Cricket')); 

/*
Sequence of the generator function -->

->Generator started in paused stated; iterator is returned.
->The it.next() yields “What is your name”. The generator is paused. This is done by the yield keyword.
->The call it.next(“Ethan”) assigns the value Ethan to the variable name and yields “What is your favorite sport?” Again the generator is paused.
->The call it.next(“Cricket”) assigns the value Cricket to the variable sport and executes the subsequent return statement.
*/

