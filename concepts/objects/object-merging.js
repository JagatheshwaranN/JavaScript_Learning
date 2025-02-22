// Merging Objects
// Merging objects means combining two objects into one. If both objects
// share the same key, the second object’s value will overwrite the first one’s.

// Merging using Object.assign()
let car1 = {make: "Toyota", model: "Sedan"};
let car2 = {year: 2022, color: "Red"};
let mergedObject = Object.assign({}, car1, car2);
console.log(mergedObject);

// Merging using (... Spread Operator)
let car3 = {make: "Honda", model: "SUV"};
let car4 = {year: 2023, color: "Gray"};
let mergedObject1 = {...car3, ...car4};
console.log(mergedObject1);

// Merging using (... Spread Operator)
let car5 = {make: "Honda", model: "SUV"};
let car6 = {make: "Hero", model: "XUV"};
let mergedObject2 = {...car5, ...car6};
console.log(mergedObject2);