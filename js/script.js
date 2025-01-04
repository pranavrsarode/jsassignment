/*

Print Fibonacci series n numbers,
 n is input 
 Example: 
 fib(0) = 0 
 fib(1) = 0 
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
/*
console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(8));
*/



/*
Given a positive integer, n. Find the factorial of n.
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
let n = 5; 
//console.log(factorial(n));



/*
Write a function that returns the least common multiple (LCM) of two integers.
Examples
lcm(9, 18) ➞ 18
lcm(8, 5) ➞ 40
lcm(17, 11) ➞ 187
*/

function gcd(a, b) 
{ 
if (b == 0) 
    return a; 
return gcd(b, a % b); 
} 

// Function to return LCM of two numbers 
function lcm(a, b) 
{ 
    return (a / gcd(a, b)) * b; 
} 

// Driver program to test above function 
 
let a = 15, b = 20; 
console.log("LCM of " + a + " and "+ b + " is " + lcm(a, b));
