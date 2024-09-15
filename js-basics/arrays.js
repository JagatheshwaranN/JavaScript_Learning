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
    { id: 1, name: "javascript" },
    { id: 2, name: "typescript" }
];

let course = courses.find(function (course) {
    return course.name === 'javascript';
});
console.log(course);

course = courses.find(function (course) {
    return course.name === 'javascripts';
});
console.log(course);

let courseRef = courses.findIndex(function (course) {
    return course.name === 'typescript';
});
console.log(courseRef);

courseRef = courses.findIndex(function (course) {
    return course.name === 'typescripts';
});
console.log(courseRef);

// Find using Arrow Function
console.log('Array - Arrow function');

// Normal form
let courseObj = courses.find((course) => {
    return course.name === 'javascript'
});
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
while (container.length > 0)
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
let firstArr = [{ id: 1 }];
let secondArr = [4, 5, 6];
firstArr[0].id = 10;
let combinedArr = firstArr.concat(secondArr);
let slicedArr = combinedArr.slice();
console.log(combinedArr);
console.log(slicedArr);

// Concatenation using Spread Operator
console.log('Array - Concate using Spread Operator');

let combinedArray = [...firstArray, ...secondArray];
console.log(combinedArray);

// Flexibility with Spread Operator is, we can add elements while combining arrays.
let combinedArray1 = [...firstArray, 10, ...secondArray];
console.log(combinedArray1);

// Spread Operator can also be used to copy array elements
let copyArray = [...combinedArray1];
console.log(copyArray);

// Iterating an array
console.log('Array - Iteration');

let dataSet = [1, 2, 3];
for (let number of dataSet)
    console.log(number);

console.log('Iterate using forEach() loop')
// Using traditional away
dataSet.forEach(function (number) {
    console.log(number);
})

// Using Arrow function
dataSet.forEach(number => console.log(number));

// Benefit of using forEach() is we can take index parameter.
dataSet.forEach((number, index) => console.log(number, index));

// Joining Arrays
console.log('Array - Joining')

const numberValues = [2, 3, 1];
const joined = numberValues.join(',');
console.log(joined);

const message = 'I like Javascript';
const parts = message.split(' ');
console.log(parts);

const combinedMessage = parts.join('-');
console.log(combinedMessage);

// Sorting an array
console.log('Array - Sorting');
numberValues.sort();
console.log(numberValues);

numberValues.reverse();
console.log(numberValues);

const coursesBox = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'Angular.js' },
];

// Here, the order is not changed. The solution is as below.
console.log(coursesBox.sort());

coursesBox.sort(function (a, b) {
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();
    if (name1 < name2)
        return -1;
    if (name1 > name2)
        return 1;
    return 0;
});

console.log(coursesBox);

// Testing the array elements
console.log('Array - Testing elements')

// every() - It is used to check all the elements are matching the given
// criteria. It returns true ONLY all elements matches the criteria.
let collector = [1, 2, 3];
const allPositive = collector.every(function (val) {
    return val >= 0;
});
console.log(allPositive);

// sum() - It is used to check some of the elements are matching the given
// criteria. It returns true even if some elements matches criteria.
let collector1 = [-1, 2, 3];
const atLeastOnePositive = collector1.some(function (val) {
    return val >= 0;
});
console.log(atLeastOnePositive);

const allPositive1 = collector1.every(function (val) {
    return val >= 0;
});
console.log(allPositive1);

// Filter an array
console.log('Array - Filter elements')

const valueSet = [1, -1, 2, 3];
const filtered = valueSet.filter(value => value >= 0);
console.log(filtered);

// Mapping an array
console.log('Array - Mapping elements')

// map() is used to map each element in an array to something else.
const valueBox = [1, 2, 3, 4];
const itemSet = valueBox.map(v => '<li>' + v + '<\li>');
const html = '<ul>' + itemSet.join('') + '<ul>';
console.log(html);

const itemValSet = valueBox.map(n => {
    return { value: n };
});
console.log(itemValSet);

// filter() and map() are return new array and not modify the original
// array. They are chainable.
const result = valueSet
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
console.log(result);

// Reducing an array
console.log('Array - Reduce array')

// Let us consider a scenario for the use of reduce.
// We need to sum the elements in an array. The traditional way is below.
const numberBox = [1, 2, -1, 3];
let sum = 0;
for (let n of numberBox) {
    sum += n;
}
console.log(sum);

// Here, comes the reduce() method which can reduce the all elements to 
// the single element.
const sumValue = numberBox.reduce((accumulator, currentVal) => accumulator + currentVal);
console.log(sumValue);

// Array Exercises
console.log('Array Exercises');

// Array from Range
console.log('Array from Range');

let numberVals = arrayFromRange(-2, 4);
console.log(numberVals);
numberVals = arrayFromRange1(-5, 4);
console.log(numberVals);

// Normal Approach
function arrayFromRange(min, max) {
    let array = [];
    let counter = 0;
    for (let i = min; i <= max; i++) {
        array[counter++] = i;
    }
    return array;
}

// Simplified Approach
function arrayFromRange1(min, max) {
    let output = [];
    for (let i = min; i <= max; i++) {
        output.push(i);
    }
    return output;
}

// Include Function
console.log('Array Includes');

const digits = [1, 2, 3, 4];
console.log(includes(digits, 1));
console.log(includes1(digits, 1));

// Approach 1
function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement)
            return true;
        return false;
    }
}

// Approach 2
function includes1(array, searchElement) {
    for (let element of array) {
        if (element === searchElement)
            return true;
        return false;
    }
}

// Exclude Values
console.log('Array Values Exclude');

let digitBox = [1, 2, 3, 4, 1];
let output = except(digitBox, [1, 2]);
console.log(output);

function except(array, exclude) {
    let newArray = [];
    for (let element of array) {
        if (!exclude.includes(element))
            newArray.push(element);
    }
    return newArray;
}

// Moving an Element
console.log('Array element move')

let numberVault = [1, 2, 3, 4];
let resultVal = move(numberVault, 1, 0);
console.log(resultVal);

let numberVault1 = [1, 2, 3, 4];
let resultVal1 = move1(numberVault1, 1, 0);
console.log(resultVal1);

// Approach 1
// Here, movement of elements is not restricted.
function move(array, index, offset) {
    if (offset >= array.length || offset < 0) {
        console.error('Invalid offset');
        return;
    }
    for (let i = 0; i < array.length; i++) {
        if (i == index) {
            let temp = array[offset];
            array[offset] = array[i];
            array[i] = temp;
        }
    }
    return array;
}

// Approach 2
// Here, movement of element is restricted.

// Let say, index is 0 which has value 1 and it can be moved to 1, 2, 3 offset position
// which has values 2, 3, and 4. Movement in reverse negative direction is also possible within
// the limit.

// Let say, index is 1 which has value 2 and it can be moved to 1, 2 offset position which
// has values 3 and 4. Movement in reverse negative direction is also possible within the limit.

// Here, the value whatever we choose to move, the element's current index position is treated as 
// 0 and can move from its current position to the length of array.
function move1(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }
    const newArray = [...array];
    const element = newArray.splice(index, 1)[0];
    newArray.splice(position, 0, element);
    return newArray;
}

// Count Element Occurrences
console.log('Count array element occurrence')

const dataVault = [1, 2, 3, 4, 1];
const count = countOccurrence(dataVault, 1);
console.log(count);

function countOccurrence(array, searchElement) {
    // let count = 0;
    // for(let element of array)
    //     if(element === searchElement)
    //         count++;
    // return count;
    return array.reduce((accumulator, currentVal) => {
        const occurrence = (currentVal === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

// Get the Maximum Element
console.log('Get the highesh element in array')

const dataStore = [1, 2, 4, 3];
const max = getMax(dataStore);
console.log(max);

function getMax(array) {
    if (array.length === 0)
        return undefined;
    // let max = array[0];
    // for(let i = 1; i < array.length; i++) {
    //     if(array[i] > max) {
    //         max = array[i];
    //     }
    // }
    // return max;

    return array.reduce((accumulator, currentVal) => (currentVal > accumulator) ? currentVal : accumulator);
}

// Movies
console.log('Get the movie details')

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3.5 },
    { title: 'd', year: 2017, rating: 4.5 }
];

const resultData = movies
    .filter(obj => obj.year === 2018 && obj.rating >= 4)
    .sort(function (a, b) {
        const aRating = a.rating;
        const bRating = b.rating;
        if (aRating > bRating)
            return -1;
        if (aRating < bRating)
            return 1;
        return 0;
    }).map(obj => obj.title);
console.log(resultData);

const resultData1 = movies
    .filter(obj => obj.year === 2018 && obj.rating >= 4)
    .sort((a, b) => a - b)
    .reverse()
    .map(obj => obj.title);
console.log(resultData1);