// Closure

// A closure is the combination of a function and the lexical environment within
// which that function was declared. This environment consists of any variables
// that were in-scope at the time the closure was created.
function makeFunc() {
  let name1 = "Jaga";
  function displayName(newName) {
    name1 = newName;
    console.log(name1);
  }
  return displayName;
}
// name1 = "Johny";
const myfunc = makeFunc();
// name = "Johny";
myfunc("Johny");
myfunc("Jackson");

// The closure captures the reference to name inside the function’s lexical 
// environment at the time makeFunc() was called.

// Even though you reassign name = "Another Name";, that’s a completely different
// variable in the global scope, which doesn’t affect the closure’s reference inside
// makeFunc().