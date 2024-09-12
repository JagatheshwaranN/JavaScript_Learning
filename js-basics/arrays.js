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

// Array - element add at End. Push() method is used to add elements at End.
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
console.log(values.lastIndexOf(1));
console.log(values.indexOf(1) !== -1);
console.log(values.includes(2));
console.log(values.includes(5));

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