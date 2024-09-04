// Objects

// The purpose of an object is to group related variables.

// The Object Oriented Programmjng is a style of programming where we see a
// program as a collection of objects which talk to each other to perform
// some functionality.

// Object Oriented Programming (OOP)
const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    isVisible : true,
    draw : function() {
        console.log('Draw a circle');
    }
};

circle.draw();

// Factory Function - Produce Objects
// Uses Camel Notation
function createCircle(radius) {
    return {
        radius : radius,
        draw : function() {
            console.log('Draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

// Simlified & modernized coding style
function createCircleObj(radius) {
    return {
        // When the key and value uses same name, we can write it as below
        radius,
        draw() {
            console.log('Draw');
        }
    };
}

const circle2 = createCircleObj(2);
console.log(circle2);

// Constructor Function
// Uses Pascal Notation

// When we use new operator, 3 things happen

// First, Empty object creation
// Second, It will set "this" keyword to point this object
// Third, return object from the function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw Circle');
    }
}

const circle3 = new Circle(2);
console.log(circle3);

// Dynamic Nature of Objects

const square = {
    side : 1
};

square.color = 'green';
square.draw = function () {
    console.log('Draw a Square');
}

delete square.color;

console.log(square);

// Constructor Property

function createRectangle(length, width) {
    return {
        length,
        width,
        draw: function() {
            console.log('Draw a rectangle using FF')
        }
    };
}

const rectangle = createRectangle(2, 3); //  Object() { [native code] }
// When we create an object using Object Literal syntax, internally the Javascript
// Engine uses the Constructor function
console.log(rectangle.constructor)

function Rectangle(length, width) {
    this.length = length;
    this.width = width;
    this.draw = function () {
        console.log('Draw a rectange using CF')
    }
}

const another = new Rectangle(2, 3);
console.log(another.constructor)

// Functions are Objects - Most confusing concept

// 
function Triangle(base, height) {
    this.base = base;
    this.height = height;
    this.draw = function () {
        console.log('Draw a Triangle');
    }
}


const triangle = new Triangle(1, 2);
console.log(Triangle.name);
console.log(Triangle.length);

// ƒ Function() { [native code] } - Builtin constructor Function

// When we declare a function using this syntax - function Triangle(base, height)
// Internally JavaScript Engine will use the ƒ Function() { [native code] } constructor
// to create this Function as [Object]
console.log(Triangle.constructor);

const Triangle1 = new Function('base', 'height', `
    this.base = base;
    this.height = height;
    this.draw = function () {
        console.log('Draw a Triangle');
    }`);

const angleObject = new Triangle1(2, 3);
console.log(angleObject);   

// Methods available in Function
// call() & apply()

// This line is equal to the line below in 152
Triangle.call({}, 2, 3);

const triangle1 = new Triangle(1, 2);
// Actually, when we use the new operator, it will internally create a empty object and
// pass them to the call method. The empty object will determine the "this" context. So,
// "this" will represent the object.

const triangle2 = Triangle(1, 2);
// If we don't use new operator, then the "this" will point to the global object [window].

// It is same as call() method, but it has the capability to pass the variables as array.
Triangle.apply({}, [1, 2]);

// Value vs. Reference Types

// Primitives are copied by their value
// Objects are copied by their reference

console.log('Value vs. Reference Types');
// Example - Primitive
let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);

let number = 5;
function increase(number) {
    number++;
}
increase(number);
console.log(number);

// Example - Reference
let a = {value: 10};
let b = a;
a.value = 20;
console.log(a);
console.log(b);

let numberRef = {value: 5};
function increase(numberRef) {
    numberRef.value++;
}
increase(numberRef);
console.log(numberRef);

// Enumeration Properties of an Object

const circleObject = {
    radius: 1,
    draw() {
        console.log('Draw a Circle Object');
    }
};

// for-in : Used for Objects
// for-of : Used for Arrays

for( let key in circleObject) {
    console.log(key, circleObject[key]);
}

// When we use for-of with Object, Uncaught TypeError: circleObject is not iterable
// will be thrown.

// for( let key of circleObject) {
//     console.log(key, circleObject[key]);
// }

// So, instead we have to use the below one.
for( let key of Object.keys(circleObject)) {
    console.log(key, circleObject[key]);
}

// Another way to access is as below. But, it gives you key value pair.
for( let key of Object.entries(circleObject)) {
    console.log(key, circleObject[key]);
}

// To check property / method present in a Object
if('radius' in circleObject)
    console.log('Yes');