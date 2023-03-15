var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!


console.log("there are " + countPositives + " positive values");

/*
Bonus Challenges:
Level 1: Write this as a function that accepts arrays as parameters.
Level 2: Include a return statement that gives back the counted positive numbers.
Level 3: Instead of returning the count, console.log the count and return a new array of only the positive numbers.
*/

// solution from group 2
function positives(numbers) {
    var countPositives = 0;
    var newarr = [];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            countPositives += 1;
            newarr.push(numbers[i]);
        }

    } 
    console.log("there are " + countPositives + " positive values");
    return newarr;

}
var newarr = positives([3, 4, -2, 7, 16, -8, 0]);
console.log(newarr);