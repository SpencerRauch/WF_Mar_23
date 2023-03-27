//https://leetcode.com/problems/arranging-coins/

/*
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins.
The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

*/

function arrangeCoins(n){
    //your code here
    var i = 1; //row number
    while (n >= i){ //while remaining coins greater or equal to row number
        n -= i; //subtract out row number
        i++; //increase to next row
    }
    return i-1; //return last successful row (one previous)
}

function arrangeCoins2(n){
    //your code here
    for (var i = 1; n >= i; i++){
        n -= i;
    }
    return i-1
}


console.log(arrangeCoins2(5)) // output: 2
console.log(arrangeCoins2(8)) // output: 3
console.log(arrangeCoins2(11)) // output: 4

