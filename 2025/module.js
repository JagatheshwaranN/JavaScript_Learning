// ************* Function *************

// Specific Import Style
// import earnMoney from "./sub-module.js";
// import { growMoney as grow, giveMoney as give } from "./sub-module.js";

// Complete Import Style
// import * as mod from "./sub-module.js";

// console.log(earnMoney());
// console.log(grow());
// console.log(give());

// console.log(mod.default());
// console.log(mod.growMoney());


// ************* Class *************

import Student from "./sub-module.js";

const person = new Student("John");
console.log(person.greeting());