/*
1. Print Fibonacci series n numbers, n is input
Example:
fib(0) = 0
fib(1) = 1
fib(5) = 0, 1, 1, 2, 3
fib(8) = 0, 1, 1, 2, 3, 5, 8, 13
 */ 

function fib(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let ansArr=[];
    if (num === 1 || num === 0) {
        ansArr.push(num1);
        return ansArr;
    } else if (num === 2) {
        ansArr.push(num1);
        ansArr.push(num2);
        return ansArr;
    } else {
        ansArr.push(num1);
        ansArr.push(num2);
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum; 
            ansArr.push(sum);
        }
        return ansArr;
    }
}
console.log("Print Fibonacci series n numbers");
console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(8));


/*
2. Given a positive integer, n. Find the factorial of n.
Examples :
Input: n = 5
Output: 120
Explanation: 5*4*3*2*1 = 120
Input: n = 4
Output: 24
Explanation: 4*3*2*1 = 24 
*/

function factorial(n) { 
    let res = 1;     
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        res = res * i; 
    return res; 
}

console.log("Print Fibonacci series n numbers");
console.log(factorial(5));
console.log(factorial(4));



/*
3. Write a function that returns the least common multiple (LCM) of two integers.
Examples
lcm(9, 18) ➞ 18
lcm(8, 5) ➞ 40
lcm(17, 11) ➞ 187
*/
function lcm(num1, num2){
    let lcm = 1;
    let multiplesArray = [];

    if(num2 > num1){
        num1 = num1 + num2;
        num2 = num1 - num2;
        num1 = num1 - num2;
    }
    for(i = 1; i<= num2; i++){
        multiplesArray.push(num1*i);
    }
    for(j = 1; j<= num1; j++){
        if(multiplesArray.indexOf(num2*j) !== -1){
            return num2*j;
        }
    }
    return lcm;
}
console.log("Least common multiple (LCM) of two integers");
console.log(lcm(9, 18));
console.log(lcm(8, 5));
console.log(lcm(17, 11));



/*
4. Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
Examples
insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
*/

function insertWhitespace(str){
    return str.replace(/([A-Z])/g," $1").slice(1);
}
console.log("Space between every instance of a lower character followed immediately by an upper character");
console.log(insertWhitespace("SheWalksToTheBeach"));
console.log(insertWhitespace("MarvinTalksTooMuch"));
console.log(insertWhitespace("TheGreatestUpsetInHistory"));
