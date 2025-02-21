// Using object literals is fine when you only need to create one object,
// but if you have to create more than one, as in the previous chapters.

function createPerson(name) {
    const object = {};
    object.name = name,
    object.intro = function() {
        console.log(`Hi! I'm ${this.name}`);
    }
    return object;
}

// This function creates and returns a new object each time we call it. The 
// object will have two members:
// a property name
// a method introduceSelf()

const daniel = createPerson("Daniel");
console.log(daniel.name);
daniel.intro();

const jack = createPerson("Jack");
console.log(jack.name);
jack.intro();

// The above code works fine but is a bit long-winded: we have to create an empty 
// object, initialize it, and return it.

// A better way is to use a constructor. A constructor is just a function called 
// using the new keyword. When you call a constructor, it will:
// create a new object
// bind this to the new object, so you can refer to this in your constructor code
// run the code in the constructor
// return the new object.

function Person(name) {
    this.name = name,
    this.intro = function() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

const rosy = new Person("Rosy");
console.log(rosy.name);
rosy.intro();

const jacklin = new Person("Jacklin");
console.log(jacklin.name);
jacklin.intro();

