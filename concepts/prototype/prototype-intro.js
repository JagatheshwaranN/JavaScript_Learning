// Prototypes are the mechanism by which JavaScript objects inherit features from one
// another.

// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype,
// making what's called a prototype chain. The chain ends when we reach a prototype
// that has null for its own prototype.

const myObject = {
  city: "Texas",
  greet() {
    console.log(`Welcome to ${this.city}`);
  },
};

myObject.greet();

// The below code is the proper way to get the prototype of an Object.
// This is an object called Object.prototype, and it is the most basic prototype, 
// that all objects have by default. 
// Object.getPrototypeOf(myObject);

// When the below code is executed on the  Browser console, we can see the
// below values.
//{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ,
//  __lookupSetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ 
// valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ 
// __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ 
// __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ 
// __proto__()

// Alternate way to access the above properties as below.
// myObject.__proto__

const myDate = new Date();
let object = myDate;

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while(object);

// When the above code is executed in Browser Console. It will print below output
// VM339:6 {toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, toUTCString: ƒ, …}constructor: ƒ Date()getDate: ƒ getDate()getDay: ƒ getDay()getFullYear: ƒ getFullYear()getHours: ƒ getHours()getMilliseconds: ƒ getMilliseconds()getMinutes: ƒ getMinutes()getMonth: ƒ getMonth()getSeconds: ƒ getSeconds()getTime: ƒ getTime()getTimezoneOffset: ƒ getTimezoneOffset()getUTCDate: ƒ getUTCDate()getUTCDay: ƒ getUTCDay()getUTCFullYear: ƒ getUTCFullYear()getUTCHours: ƒ getUTCHours()getUTCMilliseconds: ƒ getUTCMilliseconds()getUTCMinutes: ƒ getUTCMinutes()getUTCMonth: ƒ getUTCMonth()getUTCSeconds: ƒ getUTCSeconds()getYear: ƒ getYear()setDate: ƒ setDate()setFullYear: ƒ setFullYear()setHours: ƒ setHours()setMilliseconds: ƒ setMilliseconds()setMinutes: ƒ setMinutes()setMonth: ƒ setMonth()setSeconds: ƒ setSeconds()setTime: ƒ setTime()setUTCDate: ƒ setUTCDate()setUTCFullYear: ƒ setUTCFullYear()setUTCHours: ƒ setUTCHours()setUTCMilliseconds: ƒ setUTCMilliseconds()setUTCMinutes: ƒ setUTCMinutes()setUTCMonth: ƒ setUTCMonth()setUTCSeconds: ƒ setUTCSeconds()setYear: ƒ setYear()toDateString: ƒ toDateString()toGMTString: ƒ toUTCString()toISOString: ƒ toISOString()toJSON: ƒ toJSON()toLocaleDateString: ƒ toLocaleDateString()toLocaleString: ƒ toLocaleString()toLocaleTimeString: ƒ toLocaleTimeString()toString: ƒ toString()toTimeString: ƒ toTimeString()toUTCString: ƒ toUTCString()valueOf: ƒ valueOf()Symbol(Symbol.toPrimitive): ƒ [Symbol.toPrimitive]()[[Prototype]]: Object
// VM339:6 {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// VM339:6 null
// undefined

// Reason
// This code creates a Date object, then walks up the prototype chain, logging the 
// prototypes. It shows us that the prototype of myDate is a Date.prototype object, 
// and the prototype of that is Object.prototype.

