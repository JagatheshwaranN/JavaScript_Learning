// Closure Example

// adder is a function factory. It creates functions that can add a specific 
// value to their argument. 
function adder(x) {
  return function (y) {
    return x + y;
  };
}

// add2 and add5 both form closures. They share the same function body definition, 
// but store different lexical environments. In add2's lexical environment, x is 2, 
// while in the lexical environment for add5, x is 5.
const add2 = adder(2);
const add5 = adder(5);

console.log(add2(1));
console.log(add5(3));
