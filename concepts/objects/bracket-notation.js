// Bracket notation provides an alternative way to access object properties. 

var student = {
    name: ["Bob", "Smith"],
    age: 15
}

console.log(student["name"]);
console.log(student["age"]);

var student1 = {
    name: {
        first: "Bob", 
        last: "Smith",
    },
    age: 15
}

console.log(student1["name"]["first"]);
console.log(student1["name"]["last"]);

// Note: This looks very similar to how you access the items in an array, 
// and it is basically the same thing — instead of using an index number 
// to select an item, you are using the name associated with each member's
// value. It is no wonder that objects are sometimes called associative 
// arrays — they map strings to values in the same way that arrays map 
// numbers to values.

function logProperty(property) {
    console.log(student1[property]);
}

logProperty("name");
logProperty("age");