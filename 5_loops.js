/*
Author -- Hardik
Purpose -- JS Loops --

Iterations -- 
 -->> Definite Iterations- for : A loop whose number of iterations are definite/fixed.
    syntax -- 
    for(initialization;termination_Condition;step){
        //statements
    }
*/

/* For loop */

var num = 5
var fact = 1;
for(let i = num;i>=1;i--)
{
    fact *= i;
}
console.log(fact);

"use strict"

for(let temp, i=0,j=1;i<30;temp=i,i=j,j=i+temp)
console.log(j);
console.log("");
/* for..in loop 
    ->This is used to iterate through the object properties

    syntax :: 
    for(variable_name in object)
    {
        statement or block of statements
    }
*/

var obj = {
    a:1,
    b:2,
    c:3
}

for(var prop in obj)
{
    console.log(obj[prop])
    //Will print the object values corresponding to keys
}

console.log("")
/* For..of loop 
   -> This is used to iterate iterables instead of object literals.
    syntax -- 
    for(variable_name of object)
    {
        //statements or block of statement to execute
    }
   */

for(let val of [12,13,123])
{
    console.log(val);
}


/* Indefinite loop 
  --> While loop -- Executes the instructions each time the conditions specified evaluates to true

    Start -> Condition -> True -> Conditional code -> condition -> True -> Conditional code ...
                       -> False -> Exit loop
    
    Syntax :: 
    while(exp)
    {
        statement(s) to be executed if exp is true
    }
*/

var num = 5;
var fact = 1;
while(num>=1)
{
    fact = fact*num;
    num--;
}
console.log("Factorial is --> "+fact);

/* do..while loop 
    syntax ::
    do{
        statement(s) to be executed if exp is true
    }while(exp)

*/

var n = 10;
do{
    console.log(n);
    n--;
}while(n>=0);


/* The loop control statements
 -> Break statement -- Used to take control out of a construct
 */

 var i = 1;
 while(i<=10)
 {
    if(i%5==0){
    console.log("The first multiple of 5  between 1 and 10 is : "+i)
    break;          // Exits the loop after first multiple is found
    }
    i++
}

 
/* 
 -> Continue statement -- Skips the subsquent statements in the current
                    iteration and takes the control back to the beginning of the loop.
*/

var num = 0
var count = 0
for(num=0;num<=20;num++)
{
    if(num%2==0)
    {
        continue
    }
    count++
}
console.log("The count of odd values -- > " +count)

/* Using labels to control the flow
Label is simply an identifier followed by colon(:) that is applied to a statement or a block of code.
A label can be used with break or continue to control the flow more precisely. 

-> Labels with break 
 -> Labels with continue
 */


outerloop: // This is the label name  
for (var i = 0; i < 5; i++) {
    console.log("Outerloop: " + i);
    innerloop:

    for (var j = 0; j < 5; j++) {
        if (j > 3) break;

        // Quit the innermost loop  
        if (i == 2) break innerloop; 

        // Do the same thing  
        if (i == 4) break outerloop; // Quit the outer loop  
        console.log("Innerloop: " + j);
    }
}


outerloop: // This is the label name  
for (var i = 0; i < 3; i++) {
    console.log("Outerloop: " + i);

    for (var j = 0; j < 5; j++) {
        if (j == 3) {
            continue outerloop;
        }
        console.log("Innerloop: " + j);
    }
} 