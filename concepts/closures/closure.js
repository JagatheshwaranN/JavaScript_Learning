// Closure

// A closure is the combination of a function and the lexical environment within
// which that function was declared. This environment consists of any variables
// that were in-scope at the time the closure was created.
function makeFunc() {
  const name = "Jaga";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myfunc = makeFunc();
myfunc();
