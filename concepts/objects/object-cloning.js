// There are two types of cloning:
// Shallow Copy: This copies only the first level of properties. Nested objects
// still reference the original ones.
// Deep Copy: This creates a completely new object with no references to the
// original object, including nested objects.

// Shallow Copy
// It can be done using Object.assign() or Spread Operator(...).

// NOTE: When you make a shallow copy (whether using Object.assign() or the spread 
// operator ...), the top-level properties (primitive types like strings, numbers, 
// and booleans) are copied directly. However, nested objects (like arrays or other 
// objects) are not deeply copied—they are still referenced.

let car1 = {
  make: "Toyota",
  model: "Suv",
  year: 2023,
  engineType : {
    type: "V6",
    horsepower: 300
  }
};

let shallowCopy = Object.assign({}, car1);
// New object, but references inside it still point to the same objects
console.log(shallowCopy);

let shallowCopy2 = { ...car1 };
// New object, but references inside it still point to the same objects
console.log(shallowCopy2);

shallowCopy.make = "Honda";
console.log(shallowCopy); 
console.log(car1);

shallowCopy.engineType.type = "V8";
console.log(shallowCopy); 
console.log(car1);

// Deep Copy
let Vehicle = {
  make: "Toyota",
  model: "Suv",
  year: 2023,
  engine: {
    type: "V6",
    horsepower: 300,
  },
};

let deepCopy = JSON.parse(JSON.stringify(Vehicle)); // Creates a completely independent copy
console.log(deepCopy);