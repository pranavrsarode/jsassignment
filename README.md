# Javascript Assignment

1. Print Fibonacci series n numbers, n is input
Example:
fib(0) = 0
fib(1) = 1
fib(5) = 0, 1, 1, 2, 3
fib(8) = 0, 1, 1, 2, 3, 5, 8, 13

2. Given a positive integer, n. Find the factorial of n.
Examples :
Input: n = 5
Output: 120
Explanation: 5*4*3*2*1 = 120
Input: n = 4
Output: 24
Explanation: 4*3*2*1 = 24 

3. Write a function that returns the least common multiple (LCM) of two integers.
Examples
lcm(9, 18) ➞ 18
lcm(8, 5) ➞ 40
lcm(17, 11) ➞ 187

4. Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
Examples
insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

5. Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].
Examples
allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
// 2 + 5 = 7, 3 + 4 = 7
allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]
allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]

6. Sort numbers in ascending and descending order
Exaamples
sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]
sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]
sortNumsDescending([1, 2, 10, 50, 5]) ➞ [50, 10, 5, 2, 1]
sortNumsDescending([80, 29, 4, -95, -24, 85]) ➞ [85, 80, 29, 4, -24, -95]

7. Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.
Examples
rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"
rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"
rearrange(" ") ➞ ""

8. Create a function that returns any of the items you can afford in the store with the money you have in your wallet. Sort the list in alphabetical order. 

Examples
itemsPurchased({Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20" }, "$300") ➞ ["Bread", "Fertilizer", "Water"]
itemsPurchased({ Apple: "$4", Honey: "$3", Fan: "$14", Bananas: "$4", Pan: "$100", Spoon: "$2"  }, "$100") ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]
itemsPurchased({Phone: "$999", Speakers: "$300", Laptop: "$5,000", PC: "$1200"}, "$1") ➞ "Nothing"

9. Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
Examples
getHashTags("How the Avocado Became the Fruit of the Global Trade")
➞ ["#avocado", "#became", "#global"]
getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
➞ ["#christmas", "#probably", "#will"]
getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
➞ ["#surprise", "#parents", "#fruit"]
getHashTags("Visualizing Science")
➞ ["#visualizing", "#science"]

10. Given a string, reverse all the words which have odd length. The even length words are not changed.
Examples
reverseOdd("Bananas") ➞ "sananaB"
reverseOdd("One two three four") ➞ "enO owt eerht four"
reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"


Please follow following practice
Create index.html
create js/script.js

script.js

/*
1. Print Fibonacci series n numbers, n is input
Example:
fib(0) = 0
fib(1) = 1
fib(5) = 0, 1, 1, 2, 3
fib(8) = 0, 1, 1, 2, 3, 5, 8, 13
*/
function fib(num){
//Your Code
  return ans;
}
console.log(fib(0));
---
console.log(fib(8));
