// Scope Example with Var / Let / Const

// Here the var is created as GLOBAL scope.
// So we can access it outside.
if (Math.random() > 0.1) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);

// After ES6, let is allowed to create the Block scope.
// Hence, the value 'y' is not accessed outside.
if(Math.random() > 0.1) {
    let y = 1; 
} else {
    let y = 2;
}
console.log(y);

// After ES6, const is allowed to create the Block scope.
// Hence, the value 'y' is not accessed outside.
if(Math.random() > 0.1) {
    const z = 1; 
} else {
    const z = 2;
}
console.log(z);
