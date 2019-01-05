/*
Author -- Hardik

Purpose -- Understanding Javascript objects

Every datatype except primitive datatype in JS is an object

An object is an instance of which contain a set of key-value pairs.

Object Initialization -- 
objects have a literal syntax -- curly bracesv({and}).

Syntax :: 

var id = {
    key1:value,
    key2:value, // values
    key3:function(){ //functions 
        //statements
    },
    key4:['content1', 'content2'] //Array
}

These indivisual contents are called properties(or members)
And properties have keys and values
Case Sensitive
*/

var person = {
    firstname : "Hardik",
    lastname : "gupta",
    email : "hdk0512gupta@gmail.com",
    func : function(){
        return "hello hardik"
    }
};

//Access these properties

console.log("Name --> "+ person.firstname + " " + person.lastname)
console.log("Email --> " + person.email)
console.log(person.func());


/* Object() constructor -- 

Special constructor called Object() to build an object 

Alternative approach to create an object
use of new operator
*/

var Car = new Object();
Car.make = "Audi";
Car.model = "R-8";
Car.year = "2018";

console.log("Car Information");
console.log("Make --> " + Car["make"] + " model --> " + Car["model"] + " year --> "+Car["year"]);


/* Constructor Function */

//Step 1 - Define the object type by writting a constructor function

function Sensor_data(){
    this.temp = '27c',
    this.humidity = '95',
    this.battery = '115' 
};

var sense_node = new Sensor_data()
console.log(sense_node.battery)
console.log(sense_node.temp)
console.log(sense_node.humidity)

/* Destructing -- 
refers to breaking up the structure of an entity.
Makes possible to extract data from arrays/objects into distinct variables.
*/

var emp = {name:'john', id:3}
var {name,id} = emp
console.log(name)
console.log(id)


/*
Please refer 

-> JS Number Objects

-> JS String Objects

-> JS Array Objects

-> JS Date Objects

-> JS Math Objects

-> JS RegExp Objects
*/

