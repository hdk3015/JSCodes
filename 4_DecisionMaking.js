/*
Author -- Hardik
Purpose -- JS Decision making --

A conditional/Decision making constructs evaluates a condition before the instruction/s are executed

start --> Condition --> True --> Conditional code
                    --> False --> End

-> if statement
-> if..else statements
-> The else .. if ladder / nested if statements
-> switch statement
*/

/* Program to tell odd, even */
 

var num = 15;
if(num % 2 == 0)
{
    console.log("Even")
}
else{
    console.log("Odd")
}

/*Program to tell the largest number*/

var a = 15
var b = 3
var c = 9
if(( a > b)&&(a > c))
{
    console.log("a is largest")
}
else if((b>a)&&(b>c))
{
    console.log("b is largest")
}
else{
    console.log("c is largest")
}


/*Use of switch case  -- calculator program*/

var num1 = 12
var num2 = 4
var opr = '/'

switch(opr)
{
    case '+' : console.log(num1+num2);
    case '-' : console.log(num1-num2);
    case '*' : console.log(num1*num2);
    case '/' : console.log(num1/num2);
}

