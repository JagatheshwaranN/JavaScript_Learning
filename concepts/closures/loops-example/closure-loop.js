// Problem of using var keyword.
// The reason for this is that the functions assigned to onfocus form closures;
// they consist of the function definition and the captured environment from the
// setupHelp function's scope. Three closures have been created by the loop, but
// each one shares the same single lexical environment, which has a variable with
// changing values (item). This is because the variable item is declared with var
// and thus has function scope due to hoisting. The value of item.help is determined
// when the onfocus callbacks are executed. Because the loop has already run its
// course by that time, the item variable object (shared by all three closures) has
// been left pointing to the last entry in the helpText list.

// function showHelp(help) {
//   document.getElementById("help").textContent = help;
// }

// function setupHelp() {
//   var itemText = [
//     { id: "name", help: "Your Name Please!" },
//     { id: "email", help: "Your Email Please!" },
//     { id: "age", help: "Your Age Please!" },
//   ];

//   for (var i = 0; i < itemText.length; i++) {
//     var item = itemText[i];
//     document.getElementById(item.id).onfocus = function () {
//       showHelp(item.help);
//     };
//   }
// }
// setupHelp();

// Solution 1
// Use of Function Factory
// This works as expected. Rather than the callbacks all sharing a single lexical
// environment, the makeHelpCallback function creates a new lexical environment for
// each callback, in which help refers to the corresponding string from the helpText
// array.

// function showHelp(help) {
//     document.getElementById("help").textContent = help;
//   }

//   function makeHelpCallback(help) {
//     return function() {
//         showHelp(help);
//     }
//   }

//   function setupHelp() {
//     var helpText = [
//       { id: "name", help: "Your Name Please!" },
//       { id: "email", help: "Your Email Please!" },
//       { id: "age", help: "Your Age Please!" },
//     ];

//     for (var i = 0; i < helpText.length; i++) {
//       var item = helpText[i];
//       document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
//     }
//   }
//   setupHelp();

// Solution 2
// Use of Const / Let keywords
// This example uses const instead of var, so every closure binds the block-scoped
// variable, meaning that no additional closures are required.

// function showHelp(help) {
//   document.getElementById("help").textContent = help;
// }

// function setupHelp() {
//   let helpText = [
//     { id: "name", help: "Your Name Please!" },
//     { id: "email", help: "Your Email Please!" },
//     { id: "age", help: "Your Age Please!" },
//   ];

//   for (var i = 0; i < helpText.length; i++) {
//     let item = helpText[i];
//     document.getElementById(item.id).onfocus = function () {
//       showHelp(item.help);
//     };
//   }
// }
// setupHelp();

// Solution 3
// Use of ForEach
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  let helpText = [
    { id: "name", help: "Your Name Please!" },
    { id: "email", help: "Your Email Please!" },
    { id: "age", help: "Your Age Please!" },
  ];

  helpText.forEach(function (text) {
    document.getElementById(text.id).onfocus = function () {
      showHelp(text.help);
    };
  });
}
setupHelp();
