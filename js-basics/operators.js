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
console.log(1 === 1) // True
console.log('1' === 1) // False

// Lose Equality Operator - Ensures ONLY both operands are of same value.
// It doesn't care about type. If the type doesn't match.
// It will convert the type of right to match the type on left.
console.log(1 == 1)
console.log('1' == 1)
console.log(true == 1)

// Ternary Operator
console.log('Ternary Operator')
let points = 110;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);

// Logical Operator
console.log('Logical Operators')

// Logical AND, Logical OR, and Logical NOT

// Logical AND(&&) - Returns TRUE if both of the operands are TRUE.
let highIncome = true;
let goodCreditScore = true;
let eligible = highIncome && goodCreditScore;
console.log(eligible);

// Logical OR(||) - Returns TRUE if one of the operands is TRUE.
highIncome = true;
goodCreditScore = false;
let eligibleType = highIncome || goodCreditScore;
console.log(eligibleType);

// Logical NOT(!) - It is always the opposite.
let applicationRefused = !eligibleType;
console.log(applicationRefused);

// NOTE: The result of the logical expression is NOT necessarily TRUE or FALSE.
// It depends on the operands value.

console.log(false || true); // Output - true

// Why its John and 1?
console.log(false || 'John'); // Output - John
console.log(false || 1); // Output - 1

// NOTE: In Javascript, we have something called Falsy and Truthy. It's not the
// boolean TRUE or FALSE. But, it works like boolean TRUE or FALSE.

// Falsy (false) - The values used in Falsy
// Undefined
// null
// 0
// false
// ''
// NaN

// Truthy - Anything that is not Falsy is Truthy

// Short-Circuiting
console.log(false || 1 || 2); // Output - 1

// The reason is, the first two operands return True, then the Logical OR will not 
// check for rest of the operands. Becuase, if the rest of them are even True or False,
// it is used not considered as we have the result of frist 2 operands as True.

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

// Bitwise Operators

console.log('Bitwise Operators')

// If any one of the operand is 1, then the result will be 1.
// 1 - 00000001
// 2 - 00000010
// R - 00000011 // R - Result
 console.log(1 | 2);

 // If both of the operands are 1, then only the result will be 1.
// 1 - 00000001
// 2 - 00000010
// R - 00000000
 console.log(1 & 2);

 // Realworld Usecase

 // Read, Write, Execute
 // 00000100 - Read
 // 00000010 - Write
 // 00000001 - Execute

 const readPermission = 4;
 const writePermission = 2;
 const executePermission = 1;
 let mypermission = 0;
 mypermission = readPermission | writePermission;
 let message = (mypermission & readPermission) ? 'Yes' : 'No';
 console.log(message);

 // Operator Precedence
 console.log('Operator Precendence')
 x = 2 + 3 * 4;
 console.log(x);

 x = (2 + 3) * 4;
 console.log(x);

 // Swap Variables
 console.log('Swap Two Variables')
 let aa = 'red';
 let bb = 'blue';
 console.log(aa);
 console.log(bb);
 
 let cc = aa;
 aa = bb;
 bb = cc;
 console.log(aa);
 console.log(bb);


