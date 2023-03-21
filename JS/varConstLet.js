var number

myFunc()
console.log(number)
// console.log(number2)

number = 7;

const number2 = 7; //const is used for unchanging values -- CONSTANT VARIABLE
let number3 = 7; // let is used for variables that can will change

// number2 = 409583409;

const array = [];
array.push("some content")
// console.log(array.pop())
console.log(array)
array[0] = "some new content"
console.log(array)

// array = [1,23,23,4]
function newFunc(){
    const myConst = 8;
    return myConst;
}

console.log(myConst)

for (let i = 0; i < 10; i++){
    console.log(i)
}

// console.log("last log", i)


function myFunc(){
    console.log("hoisted")
}