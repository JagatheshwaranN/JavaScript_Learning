// Objects
// Key Value pair in curly braces.

const myObj = { name: "Jaga" };
console.log(myObj);
console.log(myObj.name);

const student = {
  studentName: "John",
  rollNo: 1001,
  sports: {
    indoor: "chess",
    outdoor: "basket ball",
  },
  hobbies: ["craft Work", "painting"],
  greeting: function() {
    return "Thank You!"
  },
  test: function () {
    return `Hobbies are - ${this.hobbies[0]}`;
  }

};

console.log(student);
console.log(student.studentName);
console.log(student.sports);
console.log(student.sports.indoor);
console.log(student.hobbies);
console.log(student.hobbies[1]);
console.log(student.greeting());
console.log(student.test());

// Another way to get the values of an Object
console.log(student["studentName"]);
console.log(student["sports"]);

// Object Inheritance
const vehicle = {
    doors: 2,
    engine: function() {
        return "hrooommmmm....";
    }
}

console.log(vehicle.engine());

// To copy the properties of an Object to another, use Object & Create keywords.

const car = Object.create(vehicle);
console.log(car.engine());

// Add properties to Car object
car.wheels = 4;

// Property Override
car.engine = function() {
    return "Zhooom..."
}
console.log(car);
console.log(car.engine());

const jest = Object.create(car);
console.log(jest.doors);
console.log(jest.engine());

// To get the Keys and values of the Object
const play = {
    actor: "Rosariyo",
    music: "Jemin",
    director: "Felos"
}

// To print only Keys
console.log(Object.keys(play));

// To print only Values
console.log(Object.values(play));

// To add property to the Object
play.producer = "Erick";

// To delete the property 
delete play.producer;

// After deleting the property, try to access
// console.log(play.producer); - Undefined
console.log(play.hasOwnProperty("producer"));

// Using For In loop to iterate the Play Object
for(let task in play) {
    console.log(`${task} - It's ${play[task]}`);
}

// Destructuring the Objects
const {actor: myFavActor} = play;
console.log(myFavActor);

const {music} = play;
console.log(music);

function sung({music}) {
    return music;
}

console.log(sung(play));