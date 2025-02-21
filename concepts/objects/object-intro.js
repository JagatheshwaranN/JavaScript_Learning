// NOTE: We can't access the below code snippet on BROWSER console as it not in global
// scope.
// Fixes: Change the object type from const -> var. var has global scope.

// Object - an object is made up of multiple members, each of which has a
// name and a value.
// Each name/value pair must be separated by a comma, and the name and value
// in each case are separated by a colon. 
var person = {
    name: ["John", "Smith"],
    age: 30,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    intro: function () {
      console.log(`Hi! I'm ${this.name[0]}`);
    },
  };

// Syntax 
// const objectName = {
//     member1Name: member1Value,
//     member2Name: member2Value
// }

// The first two items of Person are data items, and are referred to as the object's properties.
// name and age

// The last two items of Person are functions that allow the object to do something with that data, 
// and are referred to as the object's methods.
// bio and intro

// Short form for Method
var person1 = {
    name: ["John", "Smith"],
    age: 30,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    intro() {
      console.log(`Hi! I'm ${this.name[0]}`);
    },
  };

// An object like this is referred to as an object literal.

// It is very common to create an object using an object literal when you want to 
// transfer a series of structured, related data items in some manner, for example
// sending a request to the server to be put into a database.
