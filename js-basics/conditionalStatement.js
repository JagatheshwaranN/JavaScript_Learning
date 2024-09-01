// Conditional Statement

// Lets understand the concept with below scenario.

// If hour is between 6am and 12pm: Its Good Morning!
// If hour is between 12pm and 6pm: Its Good Afternoon!
// Otherwise: Its Good Evening!

// If Else Statement
console.log('If Else Satement')

let hour = 10;
if(hour >= 6 && hour < 12) {
    console.log('Good Morning');
} else if(hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
}

// Switch Statement
console.log('Switch Statement')

let role = 'Guest';
switch(role) {
    case 'Guest':
        console.log('Guest User');
        break;
    
    case 'Moderator':
        console.log('Moderator User');
        break;
    
    default:
        console.log('Unknown User');
}

if(role === 'Guest') console.log('Guest User')
else if(role === 'Moderator') console.log('Moderator User')
else console.log('Unknown User')

// Loops
// For, While, Do..While, For..in, For..of

// For Loop
console.log('For Loop')

for(let i = 0; i < 5; i++) {
    console.log('Hello Word!', i)
}

// While Loop
console.log('While Loop')

let i = 1;
while( i <= 5) {
    if(i % 2 !== 0) console.log(i);
    i++;
}

// Do-While Loop
console.log('DoWhile Loop')

i = 1;
do {
    if(i % 2 !== 0) console.log(i);
    i++;
} while( i <= 5);

// For In Loop - Used to iterate over objects.
console.log('For In Loop')

const person = {
    name: 'John',
    age: 30
};

for( let key in person)
    console.log(key, person[key]);

// For Of Loop - Used to iterate over elements in an array.
console.log('For Of Loop')

const colors = ['red', 'blue', 'green'];

for( let color of colors)
    console.log(color);

// Break & Continue
// Break - To jump out of the loop.
// Continue - To jump to the next iteration.
console.log('Break Statement')

let j = 0;
while(j <= 10) {
    if(j === 5) break;
    console.log(j);
    j++;
}

console.log('Continue Statement')

let k = 0;
while( k <= 10){
    if(k % 2 === 0) {
        k++;
        continue;
    }
    console.log(k);
    k++;
}

// Exercises

// Max of two numbers
console.log('Max of Two Numbers')

// Function using If Else
function max(number1, number2) {
    if(number1 > number2)
        return number1;
    else 
        return number2;
}

// Function using Enhanced IF Else
function max1(number1, number2) {
    if(number1 > number2)
        return number1;
    return number2;
}

// Function using Ternary Operator
function max2(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

let number = max(20, 10);
console.log(number);
number = max1(20, 10);
console.log(number);
number = max2(20, 10);
console.log(number);

// Landscapeor Portrait
console.log('Landscape or Portrait')

function isLandscape(width, height) {
    return (width > height); 
}

console.log(isLandscape(800, 600));

// FizzBuzz

// Requirement
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'
console.log('FizzBuzz Algorithm')

function fizzBuzz(input) {
    if(typeof input !== 'number')
        return NaN;

    if((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if(input % 3 == 0)
        return 'Fizz';

    if(input % 5 == 0)
        return 'Buzz';

    return input;
}

const output = fizzBuzz(20);
console.log(output);

// Demerit Points

// Requirement
// Speed Limit = 70
// 5 -> 1 point
// 12 points -> License Suspended
console.log('Demerit Points')

// Approach 1
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed > speedLimit)
        speedExceed = speed - speedLimit;
        const points = Math.floor(speedExceed / kmPerPoint);
        if(points == 0)
            console.log('Ok');
        else if(points >= 12)
            console.log('License Suspended');
        else
        console.log('Point :',points);
}

// Approach 2
function checkSpeed1(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if(speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if(points >= 12)
        console.log('License Suspended');
    else
    console.log('Point :',points);
}

checkSpeed(180);
checkSpeed1(130);

// Even or Odd
console.log('Even or Odd');

// Approach 1
function checkAndShowNumbers(limit) {
    for(let i = 0; i <= limit; i++) {
        if(i % 2 === 0)
            console.log(i, "EVEN");
        else
        console.log(i, "ODD");
    }
}

// Approach 2
function ShowNumbers(limit) {
    for(let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

checkAndShowNumbers(10);
ShowNumbers(10);

// Count Truthy
console.log('Count Truthy')

function countTruthy(array) {
    let count = 0;
    for(let element of array) {
        // if(!(element === 'undefined' || element ===null || element === 0 || element === '' || element === false || element === NaN)) {
        //     count++;
        // }
        if(element)
            count++;
    }
    return count;
}

let array = [0, null, '', 1, 2];
console.log(countTruthy(array));

// String Properties
console.log('String Properties');

function showProperties(obj) {
    for(let key in obj){
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

const movie = {
    title: 'a',
    releaseYear : 2020,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);

// Multipes of 3 and 5

// Requirement
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
console.log('Multiples of 3 and 5');

function sum(limit) {
    let sum = 0;

    for(let i = 0; i <= limit; i++)
        if((i % 3 === 0) || (i % 5 === 0))
            sum += i; 
    
    return sum;
}

console.log(sum(18));

// Student Grade

// Requirement
// Average = 70
// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A
console.log('Calculate Grade')

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for( let value of array)
        sum += value;
    return sum / array.length;
}

const marks = [80, 80, 80, 90, 90];
console.log(calculateGrade(marks));

// Stars
console.log('Stars')

function showStars(rows) {
    for(let row = 1; row <= rows; row++) {
        let pattern = '';
        for(let i = 1; i <= row; i++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

showStars(5);

// Prime Number

// Requirement
// Prime (Whose factors are only 1 and itself)
// Composite (Which has factors other than 1 and itself)
// Example - Prime - 11 => 1, 11
// Example - Composite - 12 => 1, 2, 3, 4, 6, 12
console.log('Prime Number')

function showPrime(limit) {
    for(let number = 2; number <= limit; number++)
        if(isPrime(number))
            console.log(number);
    
}

function isPrime(number) {
    for(let factor = 2; factor < number; factor++)
        if(number % factor === 0)
            return false;

    return true;
}

showPrime(10);