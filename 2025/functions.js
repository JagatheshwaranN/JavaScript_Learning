// Functions
function sum(n1, n2) {
  if (n2 === undefined) {
    return n1;
  }
  return n1 + n2;
}

console.log(sum(1, 2));
console.log(sum(2));

let myVar = "JavaScript@Internet.Com";
console.log(myVar.slice(0, myVar.indexOf("@")));

// Converting the above code into function.
function getUserNameFromMail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromMail("abc@gmail.com"));
console.log(getUserNameFromMail("qwerty@gmail.com"));
console.log(getUserNameFromMail("john@gmail.com"));

// Function to transform the string into Propercase

function toProperCase(data) {
  let firstChar = data.charAt(0).toUpperCase();
  let remainingChar = data.slice(1).toLowerCase();
  return firstChar + remainingChar;
}
console.log(toProperCase("javaScript"));
console.log(toProperCase("typeScript"));

// Transformation of above function declaration.

const toPropercase = function (data) {
  let firstChar = data.charAt(0).toUpperCase();
  let remainingChar = data.slice(1).toLowerCase();
  return firstChar + remainingChar;
};
console.log(toPropercase("java"));

const topropercase = (data) => {
  let firstChar = data.charAt(0).toUpperCase();
  let remainingChar = data.slice(1).toLowerCase();
  return firstChar + remainingChar;
};
console.log(toPropercase("script"));
