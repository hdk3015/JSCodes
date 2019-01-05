/*
Author -- Hardik
Purpose -- JS Operators -- 

An expression is a special kind of statement that evaluates to avalue.
It is compossed of  -- 

-> Operands - data
-> Operator - Defines how the operand will be processed to produce a value

Arithmetic operators -- 
+,-,*,/,%,++,--

Relational Operators -- 
>,<,>=,<=,==,!=

Logical Operators --
&&,||,!

Bitwise Operators --
&(And),|(Or),^(XOR),~(Not),<<(Leftshift),>>(Rightshift),>>>(Zero-fill right shift)

Assignment Operators -- 
=(Simple assignment)
+=(Add and assignment)
-=(Subtract and assignment)
*=(Multiply and assignment)
/=(Divide and assignment)

Negation Operator -- 
(-)
*/

/*Negation operator*/

var x = 4
var y = -x;
console.log("x -> "+x+" y -> "+y);

/*String Operator contatination (+)*/

var msg = "hello "+"World";
console.log(msg);


/*Conditional Operators
Test ? expr1 : expr2
*/

var num = 2;
var result = num > 0 ? "Positive" : "Negitive"
console.log(result);

/*Typeof Operator 
->Unary 
->Returns data type of the variable

Types -- number, string, boolean, Object
*/

var num = 12;
console.log(typeof(num)); //Output --> number



