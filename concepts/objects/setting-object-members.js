// Setting Object Members

var user = {
    name: {
        first: "Erica", 
        last: "Johnson"
    },
    age: 28
}

console.log(user["name"]["first"]);
console.log(user.age);

// Updating the values of existing properties and methods.
user["name"]["last"] = "Jim";
user.age = 30;
console.log(user["name"]["last"]);
console.log(user.age);

// You can also create completely new members.
user["eyes"] = "hazel";
user.farewall = function () {
    console.log("Good Bye!");
}

console.log(user["eyes"]);
user.farewall();

// One useful aspect of bracket notation is that it can be used to set not 
// only member values dynamically, but member names too. 
const myDataName = "height";
const myDataValue = "1.72 cm";
user[myDataName] = myDataValue;
console.log(user.height);