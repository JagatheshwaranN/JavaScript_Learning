// IF Statements

// if(condition) {
//     // execute
// } else {
//     // execute
// }

let play = "JS learning course";
let reply;
let spammer = true;
if(spammer) {
    reply = "You are blocked";
} else if(play) {
    reply = `Enjoy ${play}`;
} else {
    reply = "Sorry! For the inconvenience";
}

console.log(reply);

// SWITCH Statement
switch(2) {
    case 1: 
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("No Match");
}

switch(Math.floor(Math.random() * 3)) {
    case 1: 
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("No Match");
}

// TERNARY Operator
let age = 15;
let beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); 

let player = "rock";
let computer = "scissor";
let result = player === computer 
? "Tie" 
: player === "rock" && computer === "paper" 
? "computer wins!" 
: player === "scissor" && computer === "paper"
? "player wins!"
: player === "rock" && computer === "scissor"
? "player wins!"
: player === "paper" && computer === "scissor"
? "computer wins!"
: player === "scissor" && computer === "rock"
? "computer wins!"
: "player wins!";
console.log(result);

