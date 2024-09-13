// Arrays in JavaScript are ordered collections of values, where each value is called an
// element. They are a fundamental data structure used to store multiple values under a 
// single variable name.

// Array Operations

// Adding new elements
// Finding elements
// Removing elements
// Splitting arrays
// Combined arrays

// Adding new elements
console.log('Array - Adding new elements');

const numbers = [3, 4];
console.log(numbers);

// Array - element add at End. push() method is used to add elements at End.
numbers.push(6);
console.log(numbers);

// Array - element add at Beginning. unshift() method is used to add elements at Beginning.
numbers.unshift(1, 2);
console.log(numbers);

// Array - element add at Middle. splice() method is used to add elements in middle.
numbers.splice(4, 0, 5);
console.log(numbers);

// Find elements
console.log('Array - Find elements')

// Primitive Type
const values = [1, 2, 3, 1, 4];
console.log(values.indexOf('1')); // -1 - Type constraint.
console.log(values.indexOf(1)); // 0
console.log(values.lastIndexOf(1)); // 3
console.log(values.indexOf(1) !== -1); // true
console.log(values.includes(2)); // true
console.log(values.includes(5)); // false

// Reference Type
const courses = [
    {id: 1, name: "javascript"},
    {id: 2, name: "typescript"}
];

let course = courses.find(function(course) {
    return course.name === 'javascript';
});
console.log(course);

course = courses.find(function(course) {
    return course.name === 'javascripts';
});
console.log(course);

let courseRef = courses.findIndex(function(course) {
    return course.name === 'typescript';
});
console.log(courseRef);

courseRef = courses.findIndex(function(course) {
    return course.name === 'typescripts';
});
console.log(courseRef);

// Find using Arrow Function
console.log('Array - Arrow function');

// Normal form
let courseObj = courses.find((course) =>  {
    return course.name === 'javascript'});
console.log(courseObj);

// Simplified form
courseObj = courses.find(course => course.name === 'javascript');
console.log(courseObj);

// Removing elements
console.log('Array - Removing elements');

const data1 = [1, 2, 3, 4];
console.log(data1);

// Array - element remove at End. pop() method is used to remove elements at End.
let last = data1.pop();
console.log(data1);
console.log(last);

const data2 = [5, 6, 7, 8];
console.log(data2);

// Array - element remove at Beginning. shift() method is used to remove elements at Beginning.
let first = data2.shift();
console.log(data2);
console.log(first);

const data3 = [9, 10, 11, 12];
console.log(data3);

// Array - element remove at Middle. splice() method is used to remove elements in middle.
let middle = data3.splice(2, 1);
console.log(data3);
console.log(middle);

// Empty Array
console.log('Array - Empty');

// Approach 1 - This will work ONLY when we don't have anyother references of the numeric array.
let numeric = [1, 2, 3, 4];
console.log(numeric);
numeric = []; 
console.log(numeric);

// Let say we have another reference.
let items = [1, 2, 3, 4];
let anotherItems = items;
items = [];
console.log(items);
console.log(anotherItems); // Here, we have the reference of items with  anotherItems.

// Approach 2 - This will work even we have references to the original array.
let store = [1, 2, 3, 4];
let anotherStore = store;
console.log(store);
store.length = 0;
console.log(store);
console.log(anotherStore);

// Approach 3 - This will work even we have references to the original array.
let bucket = [5, 6, 7, 8];
let anotherBucket = bucket;
console.log(bucket);
bucket.splice(0, bucket.length);
console.log(bucket);
console.log(anotherBucket);

// Approach 4 - This will work even we have references to the original array.
// Performance cost is high.
let container = [9, 10, 11, 12];
let anotherContainer = container;
console.log(container);
while(container.length > 0)
    container.pop();
console.log(container);
console.log(anotherContainer);

// Combining and Slicing Arrays
console.log('Array - Combining and Slicing Arrays');

// For Primitive types, the values will be copied in the target array.
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let combined = firstArray.concat(secondArray);
console.log(combined);
let sliced1 = combined.slice(2, 4); // It will copy the elements in the given index range.
let sliced2 = combined.slice(2); // It will copy the elements from the given index.
let sliced3 = combined.slice(); // It will create the copy of the elements.
console.log(sliced1);
console.log(sliced2);
console.log(sliced3);

// For Reference types, the reference will be copied in the target array.
let firstArr = [{id: 1}];
let secondArr = [4, 5, 6];
firstArr[0].id = 10;
let combinedArr = firstArr.concat(secondArr);
let slicedArr = combinedArr.slice(); 
console.log(combinedArr);
console.log(slicedArr);
