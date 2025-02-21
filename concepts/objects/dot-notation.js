// Dot Notation is used to access the object's properties and methods.

// Example
var person = {
  name: ["John", "Smith"],
  bio() {
    console.log(`Hello! I'm ${this.name[0]}`);
  },
};

console.log(person.name);
console.log(person.bio());

// Objects as object properties
// An object property can itself be an object. For example,
var user = {
  name: ["Erick", "Son"],
};

var user1 = {
  name: {
    firstName: "Erick",
    lastName: "Son",
  },
};
