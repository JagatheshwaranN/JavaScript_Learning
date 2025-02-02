// Arrays

const arrays = [];

arrays[0] = "Javascript";
arrays[1] = 12345;
arrays[2] = true;

console.log(arrays);

// Length
console.log(arrays.length);
console.log(arrays[arrays.length - 1]);

// Push & Pop - To add & delete items to Array from last position.
arrays.push("Welcome");
console.log(arrays);

arrays.pop();
console.log(arrays);

// Unshift & Shift - To add & delete items to Array from first position.
arrays.unshift("Thanks");
console.log(arrays);

arrays.shift("Thanks");
console.log(arrays);

// When we add items to the array from and print it, it will display the length.
let lastItem = arrays.push("one");
console.log(lastItem);
console.log(arrays);

let firstItem = arrays.unshift("Ten");
console.log(lastItem);
console.log(arrays);

// When we delete items from the array dnd print it, it will display the de;eted item.
let delLastItem = arrays.pop();
console.log(delLastItem);

let delFirstItem = arrays.shift();
console.log(delFirstItem);

// To delete the items in between we can use delete keyword. But it will create empty
// item and whose type is UNDEFINED. Its NOT recommended to use.

// delete arrays[1];
// console.log(arrays);
// console.log(arrays[1]);

// Alternate - Splice() for delete the items in between in an array.
// Splice() - Takes 2 arguments, first is the position from where you
// want to delete and second is the number of items you want to delete
// from the position.
arrays.splice(1, 1);
console.log(arrays);

// Splice() - Can also be used to replace the existing item in an array.
arrays.splice(1, 1, false);
console.log(arrays);

// Splice() - Can also be used to add a new item into an array.
arrays.splice(1, 0, 98765);
console.log(arrays);

// Subset of array is copied using the Slice() function
// First arg - begin index (inclusive)
// Second arg - last index (exclusive)
let arrCopy = arrays.slice(1, 3);
console.log(arrCopy);

// reverse()
console.log(arrCopy.reverse());

// join() - Prints the items in an array as Comma(,) separated values
let newArray = arrCopy.join();
console.log(newArray);

// split() - Converts the Comma(,) separated items as Array.
const newArray1 = newArray.split(',');
console.log(newArray1);
// Note: split() - While converting the items, it takes every item
// as String.

// Joining 2 Arrays - concat
const arr1 = ["apple", "orange"];
const arr2 = ["carrot", "beetroot"];
const combineArr = arr1.concat(arr2);
console.log(combineArr);

// Joining 2 Arrays - spread operator [...]
const arr3 = ["chicken", "mutton"];
const newCombineArr = [...combineArr, ...arr3];
console.log(newCombineArr);

// 2D Array
const earnMoneyA = ["FrontEnd", "BackEnd", "FullStack"];
const earnMoneyB = ["AI", "BlockChain", "DataAnalytics"];
const growMoneyA = ["Stocks", "Real Estate", "Fixed Income"];
const growMoneyB = ["Options", "Futures"];
const giveMoney = ["Quality Education"];

console.log(earnMoneyA[1], growMoneyB[1]);

const earnMoney = [earnMoneyA, earnMoneyB];
const growMoney = [growMoneyA, growMoneyB];
console.log(earnMoney[0][1], growMoney[1][1]);

const community = [earnMoney, growMoney, giveMoney];
console.log(community[0][0][1]);