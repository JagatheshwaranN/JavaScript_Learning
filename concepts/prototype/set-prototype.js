// We can set the Object's prototype in following 2 ways.
// 1. Object.create()
// 2. Constructor


// Using Object.create
// The Object.create() method creates a new object and allows you to specify an
// object that will be used as the new object's prototype.
const personProto = {
    wish(){
        console.log("Have a good day!" );
    }
}

const john = Object.create(personProto);
john.wish();

// All functions have a property named prototype. When you call a function as a 
// constructor, this property is set as the prototype of the newly constructed 
// object (by convention, in the property named __proto__).

// Using a Constructor
const userProto = {
    greet(){
        console.log(`Hello ${this.name}, have a nice day!`);
    }
}

function person(name) {
    this.name = name;
}

Object.assign(person.prototype, userProto);
// Alternate way for above line
// person.prototype.greet = userProto.greet;

const alex = new person("Alex");
alex.greet();

// Own Properties
// Properties that are defined directly in the object, like name here, are called 
// own properties, and you can check whether a property is an own property using the
// static Object.hasOwn()
 console.log(Object.hasOwn(alex, "name"));
 console.log(Object.hasOwn(alex, "greet"));