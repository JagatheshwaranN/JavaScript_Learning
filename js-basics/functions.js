
// Functions
// Functions in JavaScript are reusable blocks of code that perform specific tasks. 
// They allow you to organize your code, make it more modular, and improve readability.

// In Javascript, we have 2 ways to declare a Function as below.
// 1. Function Declaration
// 2. Function Expression

console.log('Function Declaration vs Expression');

// Function Declaration
function walk() {
    console.log('walk');
}

// Function Expression
// Function Expression is further divided into 2 types such as Anonymous and Named.

// Anonymous Function
let run = function () {
    console.log('run');
};

// Named Function
let move = function move() {
    console.log('move');
};

walk();
run();
move();

// Hoisting
console.log('Hoisting');

// The difference between Function Declaration and Function Expression is we can call
// function before its definition when its declared using Function Declaration syntax.
// But, the same can't be applicable with Function Expression.

show();

function show() {
    console.log('Hello');
}

// Reason: Becuase the Javascript Engine when executes the code, it moves the function
// declaration to the top. This is what we call it as Hoisting. Hoisting is the process
// of moving the Function Declaration to the top of the code automatically by the 
// JavaScript Egine.

// The above code will be replaced like below when JS Engine executes this code.

// function show() {
//     console.log('Hello');
// }

// show();

// Arguments
console.log('Arugments')

function sum(a, b) {
    console.log(arguments) // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    return a + b;
}

console.log(sum(1, 2)); // 3

// Reason: We have passed one parameter and the second parameter is taken as undefined.
// So, when we add number + undefined, the result is NaN.
console.log(sum(1)); // NaN

// Reason: We have didn't pass any parameters. So, it is taken as undefined.
// So, when we add undefined + undefined, the result is NaN.
console.log(sum()); // NaN

// The below code is absolutely fine in Javascript. Becuase, it will take only the first
// two parameters.
console.log(sum(1, 2, 3, 4)); // 3

// Now, if we want to sum up all the passed parameters. Then we have something in Javascript
// as Arguments. It is used to hold all the parameters passed to the function.

// We can modify the above function to add all the parameters.
function sum1() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum1(1, 2, 3, 4));

// In modern Javascript, we can do the above task with Rest operator.

// Rest Operator
console.log('Rest Operator');

function sum2(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum2(1, 2, 3, 4, 5));

// Rest Parameter must be the last parameter of the function call else it will
// throw error. We can have zero or any number of parameters before the rest parameter.

function calculateDiscount(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(calculateDiscount(0.1, 20, 30));

// Default Values
console.log('Default Value');

// Function without default values
function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}
console.log(interest(10000, 3.5, 5));

// Function with default values - Type 1
function interest1(principal, rate, years) {
    rate = rate || 2.0;
    years = years || 3;
    return principal * rate / 100 * years;
}
console.log(interest1(10000));
console.log(interest1(10000, 3.5, 5));

// Function with default values - Type 2
function interest2(principal, rate = 2.5, years = 3) {
    return principal * rate / 100 * years;
}
console.log(interest2(10000));
console.log(interest2(10000, 3.5, 5));

// Getters and Setters
console.log('Getters & Setters');

// Getters => access properties.
// Setters => change (mutate) them.

const person = {
    firstName: 'Alex',
    lastName: 'Brown',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);
person.fullName = 'John Smith';
console.log(person);
console.log(person.fullName);

// Try Catch
console.log('Try Catch');

// Try Catch is used to handle the exception occurs during the code execution.

const employee = {
    firstName: 'Alex',
    lastName: 'Brown',
    get fullName() {
        return `${employee.firstName} ${employee.lastName}`;
    },
    set fullName(value) {
        if(typeof value !== 'string')
            throw new Error('Value is not a string.');
        const parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name.');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    employee.fullName = '';
} catch(e) {
    console.log(e);
}

console.log(employee);

// Local vs Global Scope
console.log('Local vs Global Scope');

// When we declare a variable outside of the block then it will be treated as
// Global scope variable. It can be accessed anywhere in the code.
const color = 'green';

// When we declare a variable inside the block, then it will be treated as 
// Local scope variable. It can't be accessed outside the block.
function start() {
    const message = 'Hi';
    console.log(message);
    console.log(color);
}
// console.log(message); // Uncaught ReferenceError: message is not defined
console.log(color);
start();

// Let vs Var
console.log('Let vs Var');

// When we declare a variable with Let keyword inside a block of a function.
// Then, the variable can't be accessed outside of the block even inside the
// function.
function start() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i); - Uncaught ReferenceError: i is not defined
}
start();

// When we declare a variable with Var keyword inside a block of a function.
// Then, the variable can be accessed outside of the block even inside the
// function. i.e., the var scope is not limited to the block.
function start1() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
start1();

// Before ES6 (ES2015) we had only var to declare a variable in Javascript. But,
// from ES6, we have let and const keywords.

// const and let => creates block scoped variables.
// var => creates function scoped variable.

var color1 = 'red';
let age = 30;

// When we declare a var keyword outside any function, it becomes the global scope
// and attached to the Window object. This might cause series problem. So, to avoid
// this, we should not use var keyword.
console.log(window.color1); // red

// The variable declared using let will not add to the Window Object.
console.log(window.age); // undefined

function sayHi() {
    console.log('Hello!')
}

// The function declared above also makes it global scope and attached to the Window
// object. This should not be allowed. It can be avoided with the help of modules.
window.sayHi();

// This Keyword
console.log('This Keyword');

// this - The object that executing the current function.

// If function is part of an object, then we call it as method. If the function is an 
// method in an object, "this" references the object itself.

// method => Object

// If the function is a regular function, which means it references the global object.
// It references the global objects (window, global).

// function => global (window, global)

// Example - method
const video = {
    title: 'JS Series',
    play() {
        console.log(this);
    }
};

video.play(); // {title: 'JS Series', play: ƒ}

// Here stop is a method in video object.
video.stop = function() {
    console.log(this);
};

video.stop(); // {title: 'JS Series', play: ƒ, stop: ƒ}

// Example - function // Constructor function
function playVideo() {
    console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}

playVideo();

playVideo.call({name: 'John'}, 1, 2);

// Apply takes the args as array.
playVideo.apply({name: 'John'}, [1, 2]);

function playVideos() {
    console.log(this);
}

// Bind returns a new function.
const func = playVideos.bind({name: 'John'});
func();

// The above lines can be written as below.
const func1 = playVideos.bind({name: 'John'})();

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('a');

const videos = {
    title: 'JS Series',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

videos.showTags();

// Changing This value
console.log('Changing "this" value');

// 1. Self
// 2. Bind
// 3. Arrow function

// Self - Not recommended Approach
const videos1 = {
    title: 'JS Series',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
    });
    }
};

videos1.showTags();

// Bind - Another Approach
const videos2 = {
    title: 'JS Series',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
    }.bind(this));
    }
};

videos2.showTags();

// Arrow - Another Approach
const videos3 = {
    title: 'JS Series',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
    });
    }
};

videos3.showTags();

// Function Exercises
console.log('Function Exercises');

console.log('Sum of Given Numbers');
// sum([1, 2, 3, 4]) => 10

console.log(sumNumbers(1, 2, 3, 4));
console.log(sumNumbers([1, 2, 3, 4]));

function sumNumbers(...items) {
    if(items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((accumulator, currentValue) => accumulator + currentValue);    
}

console.log('Circle Object');

const circleObj = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

circleObj.radius = 2;
console.log(circleObj.area);

console.log('Error Handling');
try {
    const dataVault = [1, 2, 3, 4, 1];
    const count = countOccurrence(null, 1);
    console.log(count);    
}
catch(e) {
    console.log(e.message);
}

function countOccurrence(array, searchElement) {
    if(!Array.isArray(array)){
        throw new Error('Invalid array.');
    }
    return array.reduce((accumulator, currentVal) => {
        const occurrence = (currentVal === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}