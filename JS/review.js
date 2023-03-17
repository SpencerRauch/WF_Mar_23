// JS review

//variables 

var number = 7;

//  const let

/*

+  addition OR concatenation 
- substraction
/ division
* multiplication
% modulo, provides the remainder

can be combined with assignment
eg: +=  
x += 1
x = x + 1

PEMDAS order of operations

*/

// data type

/*

primitive types:
booleans - true or false
numbers
string -- a collection of characters 

structural types:
arrays
objects
*/

//arrays 
//          0  1  2  3   4
var arr = [12,34,56,345,87];

//accessing an array -- is done by index
console.log(arr[2]) // 56
//assignment done the same way, access then assign
arr[2] = 72;

//adding into an array
arr.push("new value");
console.log(arr)

//removing from an array
var popped = arr.pop()
console.log(popped, arr)

//getting the length of an array
arr.length;

//getting the last element of an array
arr[arr.length-1]

// loops? used to repeat code a set amount of times, based on a condition

for (var i=0; i <= arr.length-1; i++){
    console.log(arr[i])
}
var arr = [12,34,56,345,87];
for (var i=0, x=10; i < arr.length && x >= 0; i++, x--){
    console.log(arr[i],x)
}

var i=0;
debugger;
while(i < arr.length){
    console.log(arr[i])
    i++;
}

//conditionals -- checking for something and then controlling the flow of the code based on that
// if else 
/* 

if(condition){
    code to execute if condition is true
} else {
    code to execute if condition is false
}

a == b
true if a is equal to b
a != b	true if a is not equal to b
a < b	true if a is less than b
a > b	true if a is greater than b
a <= b	true if a is less than or equal to b
a >= b	true if a is greater than or equal to b

a && b	true if both a and b are true
a || b	true if either a or b are true
*/

// debugging -- node.js trace console.log() vscode run and debug

//functions -- a recallable piece of code that runs a set of instructions, may take input, will provide output
// a function call is replaced by its return value
function myFunction(someParam){
    console.log("the param was " + someParam)
    return 10;
}

var x = myFunction("I'M THE PARAMETER")
console.log(x)

//objects -- KEY VALUE PAIRS

var username = "Bob"
var age = 30;
var occupation = "Builder"
var catchPhrase = "Can we build it, yes we can!"

var user1 = {
    "username": "Bob",
    "age": 30,
    "occupation": "Builder",
    "catchPhrase": "Can we build it, yes we can!",
    "buildIt": function(project){
        console.log(this.catchPhrase)
        console.log("Bob builds a " + project)
    },
    "printInfo": function(){
        console.log("username:" + this.username)
        console.log(user1.age)
        console.log(this.occupation)
        console.log(this.catchPhrase)
    }

}

// console.log(user1.username)
// user1.username = "Bob the Builder"
// console.log(user1)
// console.log(user1['age'])
user1.buildIt("house")
user1.printInfo()

//adding a key to our object
user1.newKey = "new value";

console.log(user1)




