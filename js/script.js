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

/*
5. Create a function that returns all pairs of numbers in an array that sum to a target.
Sort the pairs in ascending order with respect to the smaller number, 
then order each pair in this order: [smaller, larger].
Examples
allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
// 2 + 5 = 7, 3 + 4 = 7
allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]
allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]
*/

function allPairs(arr, target){
    let result = [];
    arr.sort();
    for(let i = 0; i<arr.length; i++){
        for (let j = i+1; j < arr.length; j++) {
            if((arr[i]+arr[j]) === target){
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}
function allPairsSingleloop(arr, target){
    let result = [];
    arr.sort();
    for(let i = 0; i<arr.length; i++){
        if(arr.slice(i).indexOf(target - arr[i]) !== -1){
            result.push([arr[i], target - arr[i]]);
        }
    }
    return result;
}
console.log("Function that returns all pairs of numbers in an array that sum to a target");
console.log(allPairs([2, 4, 5, 3], 7));
console.log(allPairs([5, 3, 9, 2, 1], 3));
console.log(allPairs([4, 5, 1, 3, 6, 8], 9));
console.log("Function that returns all pairs of numbers in an array that sum to a target, Single loop");
console.log(allPairsSingleloop([2, 4, 5, 3], 7));
console.log(allPairsSingleloop([5, 3, 9, 2, 1], 3));
console.log(allPairsSingleloop([4, 5, 1, 3, 6, 8], 9));


/*
6.Sort numbers in ascending and descending order
Exaamples
sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]
sortNumsDescending([1, 2, 10, 50, 5]) ➞ [50, 10, 5, 2, 1]
sortNumsDescending([80, 29, 4, -95, -24, 85]) ➞ [85, 80, 29, 4, -24, -95]
*/

function sortNumsAscending(arr){
    return arr.sort((a, b) => a - b);
}
console.log("Sorted numbers in ascending order");
console.log(sortNumsAscending([1, 2, 10, 50, 5]));
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]));


function sortNumsDescending(arr){
    return arr.sort((a, b) => b - a);
}
console.log("Sorted numbers in descending order");
console.log(sortNumsDescending([1, 2, 10, 50, 5]));
console.log(sortNumsDescending([80, 29, 4, -95, -24, 85]));


/*
7. Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.
Examples
rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"
rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"
rearrange(" ") ➞ ""
*/

function reArrange(sentence){
    let arr = sentence.trim().split(" ");
    arr.sort((a, b) => {
      return (
        parseInt(a.replace(/[^0-9]/g, "")) - parseInt(b.replace(/[^0-9]x/g, ""))
      );
    });
    return arr.map((a) => a.replace(/[0-9]/g, "")).join(" ");
}
console.log("Return the sorted sentence");
console.log(reArrange("is2 Thi1s T4est 3a"));
console.log(reArrange("4of Fo1r pe6ople g3ood th5e the2"));
console.log(reArrange(" "));


/*
8.Create a function that returns any of the items you can afford in the store with the money you have in your wallet. 
Sort the list in alphabetical order. 
Examples
itemsPurchased({Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20" }, "$300") ➞ ["Bread", "Fertilizer", "Water"]
itemsPurchased({ Apple: "$4", Honey: "$3", Fan: "$14", Bananas: "$4", Pan: "$100", Spoon: "$2"  }, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]
itemsPurchased({Phone: "$999", Speakers: "$300", Laptop: "$5,000", PC: "$1200"}, "$1") ➞ "Nothing"
*/

function itemsPurchased(storeItems,walletmoney){
    let itemsPurchased = [];
    let strItms = Object.entries(storeItems);
    console.log(strItms);
    for(let item of strItms){
        
    }
    return itemsPurchased;
}
console.log("Sort the list in alphabetical order. ");
console.log(itemsPurchased({Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20" }, "$300"));
//console.log(itemsPurchased({ Apple: "$4", Honey: "$3", Fan: "$14", Bananas: "$4", Pan: "$100", Spoon: "$2"  }, "$100"));
//console.log(itemsPurchased({Phone: "$999", Speakers: "$300", Laptop: "$5,000", PC: "$1200"}, "$1"));
