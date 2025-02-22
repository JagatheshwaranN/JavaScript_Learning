// let car = {
//     make: "japan",
//     model: "SUV",
//     year: 2024,
//     updateYear(year) {
//         this.year= year;
//     },
//     getCarInfo: function() {
//         return `Make: ${this.make}, Model: ${this.model}, and Year: ${this.year}`;
//     },
//     updateCarDetails(newMake, newModel, newYear) {
//         this.make = newMake;
//         this.model = newModel;
//         this.year = newYear;
//     }
// }

// console.log(car.make);
// console.log(car.getCarInfo());
// car.updateYear(2025);
// console.log(car.getCarInfo());
// car.updateCarDetails("German", "XUV", 2025);
// console.log(car.getCarInfo());

// let car1 = {
//   make: "Toyota",
//   model: "Sedan",
//   year: 2022,
//   compareYear: function (otherCar) {
//     // if(this.year != null && otherCar.year !=null) {
//     if (typeof this.year !== "number" || typeof otherCar.year !== "number"
//         || Number.isNaN(this.year) || Number.isNaN(otherCar.year)
//     ) {
//       return `Invalid Year Value : Car 1 Year: ${this.year} or Car 2 Year: ${otherCar.year}`;
//     }
//     if (this.year > otherCar.year) {
//       return "Newer";
//     } else if (otherCar.year > this.year) {
//       return "Older";
//     } else {
//       return "Same";
//     }
//   },
// };

// let car2 = {
//   make: "BMW",
//   model: "SUV",
//   year: undefined,
// };

// let car3 = {
//   make: "BMW",
//   model: "SUV",
//   year: null,
// };

// let car4 = {
//   make: "BMW",
//   model: "SUV",
//   year: NaN,
// };

// console.log(car1.compareYear(car2));
// console.log(car1.compareYear(car3));
// console.log(car1.compareYear(car4));

// let car1 = {
//     make: "Toyota",
//     model: "Sedan",
//     year: 2022,
//     compareYear: function (otherCar) {
//       if (typeof this.year !== "number" || typeof otherCar.year !== "number"
//           || Number.isNaN(this.year) || Number.isNaN(otherCar.year)
//       ) {
//         return `Invalid Year Value : Car 1 Year: ${this.year} or Car 2 Year: ${otherCar.year}`;
//       }
//       if (this.year > otherCar.year) {
//         return "Newer";
//       } else if (otherCar.year > this.year) {
//         return "Older";
//       } else {
//         if(this.make === otherCar.make) {
//             return "Same Year, Same Make";
//         } else {
//             return "Same Year, Different Make";
//         }
//       }
//     },
//   };
  
// let car2 = { make: "Honda", model: "SUV", year: 2022 };
// let car3 = { make: "Toyota", model: "Sedan", year: 2022 };
// console.log(car1.compareYear(car2));
// console.log(car1.compareYear(car3));

let car1 = {
  make: "Toyota",
  model: "Sedan",
  year: 2022,
  engine: { type: "V6", horsepower: 300 },
  updateDetails(newDetails) {
      this.make = newDetails.make || this.make;
      this.model = newDetails.model || this.model;
      this.year = newDetails.year || this.year;
  }
};

function cloneObject(carObject) {
  return JSON.parse(JSON.stringify(carObject));
}

function mergeObject(object1, updatedObject) {
  return {...object1, ...updatedObject};
}

let clonedObject = cloneObject(car1);
console.log(clonedObject);

let updatedCar = {model: "XUX", year: 2024}
let mergedObject = mergeObject(car1, updatedCar);
console.log(mergedObject);