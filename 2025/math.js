// Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.trunc(Math.PI)); // 3
console.log(Math.round(Math.PI)); // 3
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.7)); // 5
console.log(Math.floor(4.1)); // 4
console.log(Math.floor(4.7)); // 4
console.log(Math.pow(4, 3)); // 64
console.log(Math.min(4, 3)); // 3
console.log(Math.max(4, 3)); // 4
console.log(Math.random()); // 0.829028817678608
console.log(Math.random() * 10); // 8.29028817678608
console.log(Math.floor(Math.random() * 10) + 1); // 5

// Challenge 1 - My Solution
let nameList = "abcde".split("");
console.log(nameList);
console.log(nameList[Math.floor(Math.random() * 5)]);

// Tutor Solution
console.log("abcde".charAt(Math.floor(Math.random * 5)));

// Converting the solution into generic code
let myName = "qwerty";
console.log(myName[Math.floor(Math.random() * myName.length)]);
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
