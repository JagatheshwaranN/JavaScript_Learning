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
// Engine uses this Constructor function
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

// Functions are Objects

