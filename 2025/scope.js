// Scope - var, let, const

var x = 1;
var x = 2;
console.log(x);

let a = 1;
// let a = 2;
// const a = 3;
console.log(a);

// Global, Functional and Block Scope

// Global
var i = 1;
let j = 2;
const k = 3;

// Block [Local]
{
    let j = 5;
    console.log(j);
}

// Functional
function myFunction() {
    const k = 10; 
    console.log(k);
}
myFunction();

console.log(i);
console.log(j);
console.log(k);


