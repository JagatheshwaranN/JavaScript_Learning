// Errors
"use strict";

// Without using "use strict"
// variable = "Test";
// console.log(variable); // Test | With "use strict" - Reference Error

// Object..create(); // SyntaxError

// const val = "Js";
// val = "script"; // TypeError

// ************** Try Catch **********************
const makeError = () => {
  try {
    const val = "javascript";
    val = "typescript";
  } catch (err) {
    // console.log(err);
    // console.error(err);
    // console.table(err);
    // console.warn(err);
    console.error(err.name);
    console.error(err.stack);
  }
};

// makeError();

const customErrorDemo = () => {
  try {
    throw new customError("This is a Custom Error.");
  } catch (err) {
    console.error(err.stack);
  }
};

// User Defined
function customError(message) {
  this.message = message;
  this.name = "CustomError";
  this.stack = `${this.name}: ${message}`;
}

// customErrorDemo();

// System Defined

const systemErrorDemo = () => {
  try {
    throw new Error("This is a Custom Error.");
  } catch (err) {
    console.error(err.stack);
  }
};

// systemErrorDemo();

// ************** Try Catch Finally **********************
const finallyDemo = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd Number");
      }
      console.log("Even Number");
    } catch (err) {
      console.error(err.message);
    } finally {
      console.log("Finally..");
      i++;
    }
  }
};

finallyDemo();
