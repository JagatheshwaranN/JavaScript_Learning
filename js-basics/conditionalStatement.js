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