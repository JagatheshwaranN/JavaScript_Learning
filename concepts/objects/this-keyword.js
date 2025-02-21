// The this keyword typically refers to the current object the code 
// is being executed in. In the context of an object method, this 
// refers to the object that the method was called on.

const person1 = {
    name: "Alex",
    intro: function() {
        console.log(`Hello! I'm ${this.name}`);
    }
}

const person2 = {
    name: "Emmi",
    intro: function() {
        console.log(`Hello! I'm ${this.name}`);
    }
}
person1.intro();
person2.intro();

// In this case, person1.intro() outputs "Hello! I'm Alex."; person2.intro() outputs 
// "Hello! I'm Emmi" This happens because when the method is called, this refers to 
// the object on which the method is called, which allows the same method definition
// to work for multiple objects.