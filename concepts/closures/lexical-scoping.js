// Lexical Scoping

// The word lexical refers to the fact that lexical scoping uses the location where a
// variable is declared within the source code to determine where that variable is
// available. Nested functions have access to variables declared in their outer scope.

function init() {
  var name = "Jaga";
  function displayName() {
    console.log(name);
  }
  displayName();
}

init();
