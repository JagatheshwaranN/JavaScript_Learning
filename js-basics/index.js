 // This is the first code of JavaScript Revise Series!
 console.log('Hello World!')

 // Variables
 
 // 1. Can't be a reserved word
 // 2. Must be meaningful name
 // 3. Can't start with a number
 // 4. Can't start with a space or hypen(-)
 // 5. They are case sensitive

 // Before ES6, the keyword used for declaring the variable is var. But after ES6, the recommended
 // approach is using the let keyword.

 let userName = 'Jaga'
 console.log(userName);

 // Multiple variable declaration - Old style
 let firstName, lastName;

 // Multiple variable declaration - New style (Recommended)
 let userFirstName = 'John';
 let userLastName = 'Smith';

 // Constant

 // If you don't want to re-initialize / modify the value. Then, declare the variable as Const.

 const interestRate = 0.5;
// interestRate = 1.0; - TypeError: Assignment to constant variable.
 console.log(interestRate);

 // Primtive Types / Value Types

 // String, Number, Boolean, undefined, null
let name = 'Jaga'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let studentName;  // By default, its undefined. But we can explicitly mention too.
let studentCity = undefined;
let selectedColor = null;

// Apart from the above primitive types, we have one more type which is introduced in ES6 is Symbol.

// Dynamic Typing - Javascript is a Dynamic Typing language, which means the value of variable can
// be modified at runtime.
let object1 = 'John';
console.log(typeof(object1));
object1 = 1;
console.log(typeof(object1));

// NOTE: Undefined is actually a value but its also a type.

 // Reference Types

// Object

let person = {      // Object Literal
    name: 'John',
    age: 30
};

// Dot notation
person.name = 'Alex';

// Bracket notation
person['age'] = 28;

console.log(person)
console.log(person.name)
console.log(person.age)

// NOTE: Both Dot and Bracket notations can be used to update the Object. But, incase of dynamic acess
// Bracket notation is recommanded.

let selection = 'age';
person[selection] = 25;
console.log(person.age)

// Array

let colors = ['red', 'green', 'blue'];

colors[3] = 1;
console.log(colors)
console.log(colors[0])
console.log(colors[3])
console.log(typeof(colors))
console.log(colors.length)

// Function

function welcome(name){
    console.log('Hello '+ name);
}

welcome('John');

function square(number) {
    return number * number
}

console.log(square(2));