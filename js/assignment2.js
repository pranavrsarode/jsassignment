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
// console.log("Find the missing letter");
// console.log(findMissingLetter(['a','b','c','d','f']));
// console.log(findMissingLetter(['O','Q','R','S']));


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
    let workingDayStart = 9;
    let workingDayEnd = 17;

    let startTime = dayLog[0];
    let endTime = dayLog[1];
    let hourlyRate = dayLog[2];
    let overtimeMultiplier = dayLog[3];

    let regularHoursWorked =(endTime >= workingDayEnd) ? workingDayEnd - startTime : endTime - startTime;
    let overtimeWorked = (endTime > workingDayEnd) ? endTime - workingDayEnd : 0;

    let dailyEarning = (regularHoursWorked * hourlyRate) + (overtimeWorked * (hourlyRate*overtimeMultiplier));
    return "$"+dailyEarning.toFixed(2);

}
console.log(overTime([9, 17, 30, 1.5]));
console.log(overTime([16, 18, 30, 1.8]));
console.log(overTime([13.25, 15, 30, 1.5]));

/*
3. Nearest Chapter
Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.
Examples
nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"
nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"
nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b"
Notes
    • All page numbers in the dictionary will be valid integers.
    • Return the higher page number if ever two pages are equidistant (see last test case).
*/
function nearestChapter(chapters, pageNo){
    let chaptersArray = Object.keys(chapters);
    for (let index = 0; index < chaptersArray.length; index++) {
        const currentChapter = chaptersArray[index];
        const nextChapter = ((index+1) < chaptersArray.length) ? chaptersArray[index+1] : chaptersArray[index] ;
        let currentChapterPageNo = chapters[currentChapter];
        let nextChapterPageNo = chapters[nextChapter];

        let middlePage = (currentChapterPageNo + nextChapterPageNo) / 2;

        if(pageNo <= nextChapterPageNo){
            if(pageNo > middlePage){
                return nextChapter;
            } else if(pageNo === middlePage) {
                return nextChapter;
            } else {
                return currentChapter;
            }
        }
    }
    return "";
}

console.log(nearestChapter({
"Chapter 1" : 1,
"Chapter 2" : 15,
"Chapter 3" : 37
}, 10));
console.log(nearestChapter({
"New Beginnings" : 1,
"Strange Developments" : 62,
"The End?" : 194,
"The True Ending" : 460
}, 200));
console.log(nearestChapter({
"Chapter 1a" : 1,
"Chapter 1b" : 5
}, 3));

/*
4. Souvenir Shop
On a vacation abroad, you see a souvenir shop and decide to head inside. There are snow globes, postcards, fridge magnets and all the other goodies you'd typically find.
Given an array of prices of things in the store and the amount of money you have, return the maximum number of items you could possibly buy.
Examples
maxItems(["$1", "$1", "$2"], "$3") ➞ 2
maxItems(["$10", "$7", "$2", "$60"], "$20") ➞ 3
maxItems(["$15", "$5", "$30", "$30", "$10"], "$2") ➞ "Not enough funds!"
Notes
    • If you cannot afford anything, return "Not enough funds!"
    • Prices will be whole numbers.
*/
function maxItems(itemPrices, budget){
    budget = parseInt(budget.replace(/[^0-9.-]+/g,""));
    itemPrices = itemPrices
        .map(itemPrice => parseInt(itemPrice.replace(/[^0-9.-]+/g,"")))
        .sort((a, b) => a - b);
    
    let affordableItemsCount = 0;
    for (let index = 0; index < itemPrices.length && budget > 0; index++) {
        const itemPrice = itemPrices[index];
        if( budget>0 && (budget-itemPrice>0)){
            budget -= itemPrice;
            affordableItemsCount ++;
        }
    }
    return affordableItemsCount?affordableItemsCount:"Not enough funds!";
}

console.log(maxItems(["$1", "$1", "$2"], "$3"));
console.log(maxItems(["$10", "$7", "$2", "$60"], "$20"));
console.log(maxItems(["$15", "$5", "$30", "$30", "$10"], "$2"));

/*
5. Find All Digits
Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".
Examples
findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// digits found:  517-  4-38  29-6  -0
findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0
findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing
Notes
The digits can be discovered in any order.
 */

function findAllDigits(numberArray){
    let digitSet = new Set();
    let noWhenAllDigitsDiscovered = 0;
    numberArray.forEach(number => {
        let digitsInNumber = number.toString()
        .split("")
        .map(Number);
        digitsInNumber.forEach(digit => {
            digitSet.add(digit);
        });
        if(digitSet.size === 10 && noWhenAllDigitsDiscovered === 0){
            noWhenAllDigitsDiscovered = number;
            return;
        }
    });
    return noWhenAllDigitsDiscovered?noWhenAllDigitsDiscovered:"Missing digits!";
}

console.log(findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]));
console.log(findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]));
console.log(findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]));
