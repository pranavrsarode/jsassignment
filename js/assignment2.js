/**
1.Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P 
*/

function findMissingLetter(array) {
    var string = array.join("");
    for (var i = 0; i < string.length; i++) {
      if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
        return String.fromCharCode(string.charCodeAt(i) + 1);
      }
    }
}
console.log("Find the missing letter");
console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));


/*
2.Working 9 to 5
Write a function that calculates overtime and pay associated with overtime.
    • Working 9 to 5: regular hours
    • After 5pm is overtime
Your function gets an array with 4 values:
    • Start of working day, in decimal format, (24-hour day notation)
    • End of working day. (Same format)
    • Hourly rate
    • Overtime multiplier
Your function should spit out:
    • $ + earned that day (rounded to the nearest hundreth)
Examples
overTime([9, 17, 30, 1.5]) ➞ "$240.00"
overTime([16, 18, 30, 1.8]) ➞ "$84.00" 
overTime([13.25, 15, 30, 1.5]) ➞ "$52.50"

2nd example explained:
    • From 16 to 17 is regular, so 1 * 30 = 30
    • From 17 to 18 is overtime, so 1 * 30 * 1.8 = 54
    • 30 + 54 = $84.00
*/

function overTime(dayLog){
    let startTime = dayLog[0];
    let endTime = dayLog[1];

    let totalhour = endTime - startTime;
    console.log(totalhour);

}
console.log(overTime([9, 17, 30, 1.5]));
