// Operators

// Operators are used with variables / constants to create expressions.

// Types of Operators

// Arithmetic, Assignment, Comparison, Logical, Bitwise

// Arithmetic
console.log('Arithmetic Operators')
let x = 10;
let y = 5;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulo
console.log(x ** y); // Exponent

// Increment

// Pre-Increment
console.log(++x);

// Post-Increment
console.log(x++);
console.log(x);

// Decrement

// Pre-Decrement
console.log(--x);

// Post-Decrement
console.log(x--);
console.log(x);

// Assignment
console.log('Assignment Operators')
let z = 20;

// x++; => x = x + 1;
x = x + 5;
console.log(x += 5);

x = x * 3;
console.log(x *= 3);

// Comparison

let a = 1;

// Relational Operators
console.log('Relational Operators')
console.log( a > 0);
console.log( a >= 1);
console.log( a < 1);
console.log( a <= 1);

// Equality Operators
console.log('Equality Operators')
console.log( a === 1)
console.log( a !== 1)

// Strict Equality Operator - Ensures both operands are of same type and same value.
console.log(1 === 1)
console.log('1' === 1)

// Lose Equality Operator - Ensures both operands are of same value.
// It doesn't care about type. If the type doesn't match.
// It will convert the type of right to match the type on left.
console.log(1 == 1)
console.log('1' == 1)
console.log(true == 1)