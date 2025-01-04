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
console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(8));
